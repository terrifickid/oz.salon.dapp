<template>
  <AppLoader v-if="!loaded" />
  <template v-if="loaded">
    <template v-if="isProposer && !isMember && !passed">
      <AppContent class="items-center justify-center app-text">
        <div class="p-3">
          Thank you for submitting your application and making a financial
          commitment to Salon. Salon’s Members will now vote to approve or deny
          your application. If you are approved, you will have seven days to
          finalize your membership by sending your investment by digital wallet
          or bank wire.
        </div>
      </AppContent>
    </template>
    <template v-else>
      <div class="pt-32 font-haffer px-3 pb-32">
        <div class="grid grid-cols-12">
          <div class="app-frame">
            <a class="pb-2 flex items-center" href="/#/governance">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Back
            </a>
            <b class="capitalize text-xl">{{ proposalFormat.contentType }}</b
            ><br />
            Submitted by
            {{ proposalFormat.profile.firstName }}
            {{ proposalFormat.profile.lastName }}

            <CounterVote :votes="proposalFormat.votes" :weights="weights" />
            <AppCountdown
              v-if="!hasEnded"
              :start="proposalFormat.createdAt"
              class="mt-2"
            />
            <div class="mt-3 flex" v-if="canVote">
              <AppButtonVote
                :id="proposalFormat.id"
                :votes="proposalFormat.votes"
                :choice="true"
                :label="'Yes'"
                class="mr-2"
              />
              <AppButtonVote
                :id="proposalFormat.id"
                :votes="proposalFormat.votes"
                :choice="false"
                :label="'No'"
              />
            </div>

            <ul class="mt-5 pb-5">
              <li
                v-for="(field, index) in proposalFormat.fields"
                :key="index"
                class="mr-5 mb-5"
              >
                <template
                  v-if="disabledFields.includes(field.label)"
                ></template>
                <template
                  v-else-if="
                    String(field.label).toLowerCase().includes('units')
                  "
                >
                  <b>{{ field.label }}</b
                  ><br />
                  {{ format.format(getJSON(field.value).amount) }} for
                  {{ getJSON(field.value).units }}
                </template>
                <template v-else-if="field.label == 'Member'">
                  <b>{{ field.label }}</b
                  ><br />{{ getJSON(field.value).firstName }}
                  {{ getJSON(field.value).lastName }}<br />
                  {{ getJSON(field.value).walletAddress }}</template
                >
                <template v-else>
                  <b>{{ field.label }}</b
                  ><br />{{ field.value }}</template
                >
              </li>
            </ul>

            <ExecuteProposal :proposal="proposal" />
          </div>
        </div>
      </div>
    </template>
  </template>
</template>
<script>
import _ from "lodash";
import axios from "axios";
import AppLoader from "@/components/AppLoader";
import CounterVote from "@/components/CounterVote";
import AppCountdown from "@/components/AppCountdown";
import AppButtonVote from "@/components/AppButtonVote";
import AppContent from "@/components/AppContent";
import ExecuteProposal from "@/components/ExecuteProposal";
export default {
  components: {
    CounterVote,
    AppCountdown,
    AppButtonVote,
    AppLoader,
    AppContent,
    ExecuteProposal,
  },
  props: ["id"],
  emits: ["ready"],
  data() {
    return {
      proposal: {},
      proposalFormat: {},
      weights: [],
      loaded: false,
      format: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }),
      disabledFields: [
        "User Profile",
        "Submit Proposal",
        "Subscription Booklet",
        "votes",
      ],
    };
  },
  computed: {
    hasEnded() {
      return typeof _.get(this.proposalFormat, "votes.passed") == "boolean";
    },
    isProposer() {
      return true;
    },
    isMember() {
      return this.profile.units;
    },
    canVote() {
      if ("units" in this.profile && this.profile.units > 0) return true;
      return false;
    },
    profile() {
      return this.$store.state.profile;
    },
    uri() {
      return process.env.VUE_APP_URI + "/entry/" + this.id;
    },
    passed() {
      return _.get(this.proposalFormat, "votes.passed") === true;
    },
  },
  methods: {
    getJSON(v) {
      return JSON.parse(v);
    },
    async getWeights() {
      try {
        const res = await axios.get(process.env.VUE_APP_URI + "/members");
        console.log(res.data);
        var scope = this;
        this.weights = res.data.map(function (item) {
          return {
            walletAddress: item.fields.walletAddress,
            units: scope.getDelegatedUnits(res.data, item.fields.walletAddress),
          };
        });
      } catch (error) {
        console.log("error", error);
      }
    },
    getDelegatedUnits(members, address) {
      var units = 0;
      members.forEach(function (item) {
        if (address == _.get(item, "fields.delegate"))
          units = units + _.get(item, "fields.units");
        if (
          address == _.get(item, "fields.walletAddress") &&
          _.get(item, "fields.delegate") == 0
        )
          units = units + _.get(item, "fields.units");
      });
      return units;
    },
    getFieldLabel(fields, id) {
      for (let field of fields) {
        if (field.id == id) return field.name;
      }
    },
    async assembleProposalType(type) {
      var scope = this;
      try {
        var e = await axios.get(process.env.VUE_APP_URI + "/form/" + type);

        var votes = { votes: [] };
        if ("votes" in this.proposal.fields) {
          votes = this.proposal.fields.votes;
        }

        var fields = await Object.entries(this.proposal.fields).map(function (
          field
        ) {
          var label = scope.getFieldLabel(e.data.fields, field[0]);
          return {
            label: label,
            value: field[1],
          };
        });

        var item = {
          id: this.proposal.sys.id,
          createdAt: this.proposal.sys.createdAt,
          contentType: this.proposal.sys.contentType.sys.id,
          votes: votes,
          fields: fields,
          profile: this.proposal.fields.profile,
        };
        return item;
      } catch (error) {
        console.error(error);
        return [];
      }
    },
  },
  async mounted() {
    console.log("loading proposal!");

    try {
      const res = await axios.get(this.uri);

      this.proposal = res.data;

      var r = await this.assembleProposalType(
        this.proposal.sys.contentType.sys.id
      );
      this.proposalFormat = r;

      if (_.get(this.proposalFormat, "votes.weights.length")) {
        this.weights = _.get(this.proposalFormat, "votes.weights");
      } else {
        await this.getWeights();
      }

      this.loaded = true;
      this.$emit("ready");
    } catch (error) {
      console.log("error", error);
    }
  },
};
</script>
