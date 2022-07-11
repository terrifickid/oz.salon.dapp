<template>
  <AppLoader v-if="!loaded" />
  <div class="pt-32 font-haffer px-3" v-if="loaded">
    <div class="grid grid-cols-12">
      <div class="app-frame">
        <b class="capitalize text-xl">{{ proposalFormat.contentType }}</b
        ><br />
        {{ proposalFormat.id }}

        <CounterVote :votes="proposalFormat.votes" :weights="weights" />
        <AppCountdown :start="proposalFormat.createdAt" class="mt-2" />
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

        <ul class="mt-5 pb-24">
          <li
            v-for="(field, index) in proposalFormat.fields"
            :key="index"
            class="mr-5 mb-5"
          >
            <b>{{ field.label }}</b
            ><br />{{ field.value }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import AppLoader from "@/components/AppLoader";
import CounterVote from "@/components/CounterVote";
import AppCountdown from "@/components/AppCountdown";
import AppButtonVote from "@/components/AppButtonVote";
export default {
  components: {
    CounterVote,
    AppCountdown,
    AppButtonVote,
    AppLoader,
  },
  props: ["id"],
  emits: ["ready"],
  data() {
    return {
      proposal: {},
      proposalFormat: {},
      weights: [],
      loaded: false,
    };
  },
  computed: {
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
  },
  methods: {
    async getWeights() {
      try {
        const res = await axios.get(
          process.env.VUE_APP_URI + "/members?cache=true"
        );
        this.weights = res.data;
      } catch (error) {
        console.log("error", error);
      }
    },
    getFieldLabel(fields, id) {
      for (let field of fields) {
        if (field.id == id) return field.name;
      }
    },
    async assembleProposalType(type) {
      var scope = this;
      try {
        var e = await axios.get(
          process.env.VUE_APP_URI + "/form/" + type + "?cache=true"
        );

        var votes = { votes: [] };
        if ("votes" in this.proposal.fields) {
          votes = this.proposal.fields.votes;
          delete this.proposal.fields.votes;
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
    await this.getWeights();
    try {
      const res = await axios.get(this.uri);
      this.proposal = res.data;

      var r = await this.assembleProposalType(
        this.proposal.sys.contentType.sys.id
      );

      this.proposalFormat = r;
      this.loaded = true;
      this.$emit("ready");
    } catch (error) {
      console.log("error", error);
    }
  },
};
</script>
