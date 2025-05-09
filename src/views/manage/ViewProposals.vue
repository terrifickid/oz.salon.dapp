<template>
  <AppLoaderFull v-if="!loaded" />
  <div class="container-fluid px-5">
    <div class="grid grid-cols-12 gap-5">
      <div class="col-span-12 md:col-span-3">
        <div class="md:fixed">
          <ManageNav />

          <div class="hidden md:block">
            <span class="opacity-50">Filters</span>
            <ul>
              <li
                :class="{
                  'opacity-50': filter != 'all',
                  'opacity-100': filter == 'all',
                }"
              >
                <button @click="filter = 'all'">All</button>
              </li>

              <li
                :class="{
                  'opacity-50': filter != 'pending',
                  'opacity-100': filter == 'pending',
                }"
              >
                <button @click="filter = 'pending'">Pending</button>
              </li>

              <li
                :class="{
                  'opacity-50': filter != 'closed',
                  'opacity-100': filter == 'closed',
                }"
              >
                <button @click="filter = 'closed'">Closed</button>
              </li>

              <li
                :class="{
                  'opacity-50': filter != 'my',
                  'opacity-100': filter == 'my',
                }"
              >
                <button @click="filter = 'my'">My Proposals</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-span-12 md:col-span-9">
        <p v-if="!filteredProposals.length">No proposals.</p>
        <ListProposalItem
          v-for="(item, index) in filteredProposals.slice(0, perPage)"
          :key="index"
          :item="item"
          :members="members"
        />

        <button
          class="flex opacity-50 mt-12 cursor-pointer"
          @click="perPage += 10"
          v-if="perPage <= filteredProposals.length"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mr-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>

          Load More
        </button>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
//import _ from "lodash";
import axios from "axios";
import ManageNav from "@/components/ManageNav";
import AppLoaderFull from "@/components/AppLoaderFull";
import ListProposalItem from "@/components/ListProposalItem";
import _ from "lodash";
export default {
  components: {
    ManageNav,
    ListProposalItem,
    AppLoaderFull,
  },
  data() {
    return {
      members: [],
      loaded: false,
      filter: "all",
      perPage: 10,
    };
  },
  computed: {
    filteredProposals() {
      var p;
      switch (this.filter) {
        case "my":
          p = this.myProposals;
          break;
        case "pending":
          p = this.activeProposals;
          break;
        case "voted":
          p = this.votedProposals;
          break;
        case "closed":
          p = this.closedProposals;
          break;
        default:
          p = this.proposals;
      }
      var addressFilter = _.get(this.$route, "params.address");
      if (addressFilter) {
        p = p.filter((item) => {
          var checkAddress = _.get(item, "fields.profile.walletAddress");
          return addressFilter == checkAddress;
        });
      }
      return p.sort(function compareFn(a, b) {
        var aIsClosed = typeof _.get(a, "fields.votes.passed") == "boolean";
        var bIsClosed = typeof _.get(b, "fields.votes.passed") == "boolean";
        if (aIsClosed && !bIsClosed) return 1;
        if (!aIsClosed && bIsClosed) return -1;
        return 0;
      });
    },
    proposals() {
      return this.$store.state.proposals.filter(
        (item) => _.get(item, "fields.adminApproved") == true
      );
    },
    walletAddress() {
      return this.$store.state.walletAddress;
    },
    myProposals() {
      return this.proposals.filter(
        (item) =>
          _.get(item, "fields.profile.walletAddress") == this.walletAddress
      );
    },
    votedProposals() {
      return this.activeProposals.filter(
        (item) => _.get(item, "fields.votes.votes.length") > 0
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
    async getMembers() {
      try {
        const res = await axios.get(process.env.VUE_APP_URI + "/members");
        return res.data;
      } catch (error) {
        console.log("error", error);
      }
    },
  },
  async beforeMount() {
    console.log("proposals load!");
    const res = await axios.post(this.uri, {
      types: "exchange,acquire,invest,propose,sell,onboard,kick",
    });
    this.$store.state.proposals = _.get(res, "data.message");

    this.members = await this.getMembers();
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
