<template>
  <AppShell
    :colors="colors"
    :isLoaded="loaded"
    :protected="true"
    class="font-haffer"
  >
    <div class="pt-32 pb-64">
      <div class="grid grid-cols-12 w-full">
        <div class="app-frame">
          <div class="px-3">
            <p class="text-xl">My Proposals</p>
            <p class="text-sm mt-3" v-if="!myProposals.length">No proposals.</p>
            <ListProposalItem
              v-for="(item, index) in myProposals"
              :key="index"
              :item="item"
            />

            <p class="mt-24 text-xl">Active Proposals</p>
            <div class="mt-3">
              <p class="text-sm mt-3" v-if="!activeProposals.length">
                No proposals.
              </p>
              <ListProposalItem
                v-for="(item, index) in activeProposals"
                :key="index"
                :item="item"
              />
            </div>

            <p class="mt-24 text-xl">Closed Proposals</p>
            <div class="mt-3">
              <p class="text-sm mt-3" v-if="!closedProposals.length">
                No proposals.
              </p>
              <ListProposalItem
                v-for="(item, index) in closedProposals"
                :key="index"
                :item="item"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppShell>
</template>
<script>
// @ is an alias to /src
//import _ from "lodash";
import axios from "axios";

import AppShell from "@/components/AppShell";

import ListProposalItem from "@/components/ListProposalItem";
import _ from "lodash";
export default {
  components: {
    AppShell,
    ListProposalItem,
  },
  data() {
    return {
      colors: ["white", "black"],
      proposals: [],
      weights: [],
      types: [
        "collect",
        "invest",
        "propose",
        "sell",
        "transfer",
        "onboard",
        "kick",
      ],
      loaded: false,
    };
  },
  computed: {
    walletAddress() {
      return this.$store.state.walletAddress;
    },
    myProposals() {
      return this.proposals.filter(
        (item) =>
          _.get(item, "fields.profile.walletAddress") == this.walletAddress
      );
    },
    activeProposals() {
      return this.proposals.filter(
        (item) => !_.get(item, "fields.votes.passed")
      );
    },
    closedProposals() {
      return this.proposals.filter((item) =>
        _.get(item, "fields.votes.passed")
      );
    },
    uri() {
      return process.env.VUE_APP_URI + "/types/";
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
  },
  async beforeMount() {
    console.log("proposals load!");
    const res = await axios.post(this.uri, {
      types: "collect,invest,propose,sell,transfer,onboard,kick",
    });
    this.proposals = _.get(res, "data.message");
    console.log(this.proposals);

    await this.getWeights();
    this.loaded = true;
    console.log("loaded!");
  },
};
</script>
<style scoped>
select {
  border: 0px;
  outline: 0px;
}
</style>
