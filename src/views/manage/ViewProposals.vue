<template>
  <div class="container-fluid px-5">
    <div class="grid grid-cols-12">
      <div class="col-span-12 md:col-span-3">
        <ManageNav />
        <div class="hidden md:block">
          <span class="opacity-50">Filters</span>
          <ul>
            <router-link to="/manage/proposals">
              <li>All</li>
            </router-link>
            <router-link to="/manage/proposals">
              <li class="opacity-50">Pending</li>
            </router-link>
            <router-link to="/manage/proposals">
              <li class="opacity-50">Voted</li>
            </router-link>
            <router-link to="/manage/proposals">
              <li class="opacity-50">Closed</li>
            </router-link>
            <router-link to="/manage/proposals">
              <li class="opacity-50">My Proposals</li>
            </router-link>
          </ul>
        </div>
      </div>
      <div class="col-span-12 md:col-span-9">
        <p v-if="!myProposals.length">No proposals.</p>
        <ListProposalItem
          v-for="(item, index) in proposals"
          :key="index"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
//import _ from "lodash";
import axios from "axios";
import ManageNav from "@/components/ManageNav";
import ListProposalItem from "@/components/ListProposalItem";
import _ from "lodash";
export default {
  components: {
    ManageNav,
    ListProposalItem,
  },
  data() {
    return {
      proposals: [],
      weights: [],
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
        (item) => typeof _.get(item, "fields.votes.passed") != "boolean"
      );
    },
    closedProposals() {
      return this.proposals.filter(
        (item) => typeof _.get(item, "fields.votes.passed") == "boolean"
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
      types: "collect,invest,propose,sell,onboard,kick",
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
