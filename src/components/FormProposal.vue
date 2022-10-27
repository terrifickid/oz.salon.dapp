<template>
  <AppLoader v-if="!loaded" />
  <template v-if="loaded">
    <template v-if="isProposer && !isMember && !passed">
      <div class="pt-20 px-5 container">
        <div class="grid grid-cols-12">
          <div class="col-span-10">
            <p class="text-2xl mb-8 text-green-500">
              We've received your onboarding proposal
            </p>
            <h1 class="text-2xl opacity-50 font-haffer">
              Our members will now vote on your membership. After you're
              approved, you'll have seven days to finalize your membership by
              sending your funds by bank wire or digital wallet. Please reach
              out to hello@salondao.xyz with any questions.
            </h1>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="pb-64">
        <div class="grid grid-cols-12 mb-4">
          <div
            class="col-span-12 lg:col-span-3 capitalize"
            :class="{ 'text-green-500': !hasPassed }"
          >
            <span class="mr-8" :class="{ dot: !hasPassed }">000</span>
            {{ proposalFormat.contentType }}
          </div>
          <div class="col-span-12 lg:col-span-6 py-5 lg:py-0">
            <AppCountdown
              v-if="hasPassed"
              :start="0"
              :type="proposal.sys.contentType.sys.id"
            />
            <AppCountdown
              v-else
              :start="proposalFormat.createdAt"
              :type="proposal.sys.contentType.sys.id"
            />
          </div>
          <div class="col-span-12 lg:col-span-3">
            {{ proposalFormat.profile.firstName }}
            {{ proposalFormat.profile.lastName }}
          </div>
        </div>

        <CounterVote
          :votes="proposalFormat.votes"
          :weights="weights"
          v-if="isVotable"
        />

        <div
          class="grid grid-cols-12 flex items-center pt-5 pb-8"
          v-if="canVote && isVotable"
        >
          <div class="col-span-4 lg:col-span-2" v-if="!hasPassed">
            Your Vote
          </div>
          <div class="col-span-4 lg:col-span-6 flex">
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
        </div>

        <ul v-if="proposal.sys.contentType.sys.id != 'exchange'">
          <li
            v-for="(field, index) in proposalFormat.fields"
            :key="index"
            class="mr-5 mb-5"
          >
            <template v-if="disabledFields.includes(field.id)"></template>
            <template v-else-if="String(field.id).split('0').includes('upload')"
              ><div class="grid grid-cols-12 gap-5">
                <div class="col-span-4">
                  <span class="opacity-50">{{ field.label }}</span
                  ><br /><img :src="field.value" />
                </div></div
            ></template>
            <template v-else-if="String(field.id).split('0').includes('units')">
              <span class="opacity-50">{{ field.label }}</span
              ><br />

              {{ name }} would like to purchase
              {{ getJSON(field.value).units }} units at a price of
              {{
                format.format(
                  getJSON(field.value).amount / getJSON(field.value).units
                )
              }}
              per unit for a total of
              {{ format.format(getJSON(field.value).amount) }}.

              <p class="text-green-500">
                For reference, the current trade price of Salon units is

                {{ format.format(suggestedTradingPrice) }}.
              </p>
            </template>
            <template
              v-else-if="String(field.id).split('0').includes('member')"
            >
              <span class="opacity-50">{{ field.label }}</span
              ><br />{{ getJSON(field.value).firstName }}
              {{ getJSON(field.value).lastName }}<br />
              <!--  {{ getJSON(field.value).walletAddress }} -->
            </template>
            <template v-else>
              <span class="opacity-50">{{ field.label }}</span
              ><br />{{ field.value }}</template
            >
          </li>
        </ul>

        <ExecuteProposal :proposal="proposal" />

        <router-link to="/manage/proposals">
          <button class="flex items-center mt-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

            Close
          </button>
        </router-link>
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

import ExecuteProposal from "@/components/execute/ExecuteProposal";

export default {
  components: {
    CounterVote,
    AppCountdown,
    AppButtonVote,
    AppLoader,
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
        "profile",
        "Submit Proposal",
        "Subscription Booklet",
        "votes",
        "submitProposal0submit",
        "profile",
      ],
      treasury: {},
    };
  },
  computed: {
    name() {
      return (
        this.proposalFormat.profile.firstName +
        " " +
        this.proposalFormat.profile.lastName
      );
    },
    bookValue() {
      return (
        _.get(this.treasury, "balance") +
        _.get(this.treasury, "balanceInUsdc") +
        _.get(this.treasury, "collectionValue")
      );
    },
    suggestedTradingPrice() {
      return _.get(this.treasury, "currentTradePrice");
    },
    hasPassed() {
      return typeof _.get(this.proposalFormat, "votes.passed") == "boolean";
    },
    isProposer() {
      return true;
    },
    isMember() {
      return this.profile.units;
    },
    isVotable() {
      if (this.proposalFormat.contentType == "exchange") return false;
      return true;
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
            id: field[0],
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
      var res = await Promise.all([
        axios.get(process.env.VUE_APP_URI + "/treasury/"),
        axios.get(this.uri),
      ]);
      this.treasury = res[0].data.message;
      this.proposal = res[1].data;

      console.log(this.treasury);

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
