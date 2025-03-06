import { createStore } from "vuex";
import { ethers } from "ethers";
import axios from "axios";
import _ from "lodash";
export default createStore({
  state: {
    login: null,
    connecting: false,
    walletAddress: null,
    provider: null,
    signer: null,
    members: [],
    profile: { loading: true },
    ui: true,
    networkError: "",
    proposals: [],
  },
  getters: {
    getMembers(state) {
      const a = JSON.stringify(state.members);
      return JSON.parse(a);
    },
    activeProposalsCount(state) {
      return state.proposals.filter(function (item) {
        return !_.has(item, "fields.votes.passed");
      }).length;
    },
    membersCount(state) {
      return state.members.length;
    },
  },
  mutations: {
    hideUI(state) {
      state.ui = false;
    },
    showUI(state) {
      state.ui = true;
    },
  },
  actions: {
    async disconnect() {
      this.state.login = null;
      this.state.profile = { loading: true };

      localStorage.setItem("salon_login", 0);
    },
    async connect({ commit }, { username, password }) {
      console.log("Connecting!");
      this.state.connecting = true;
      localStorage.setItem(
        "salon_login",
        JSON.stringify({ username, password })
      );
      this.state.login = { username, password };
      //this.state.networkError = "test";
      /*
      try {
        const res = await axios.get(
          process.env.VUE_APP_URI + "/profile/" + this.state.walletAddress
        );
        console.log("init profile", res.data, this.state.walletAddress);
        this.state.profile = res.data;
        localStorage.setItem("salon_login", 1);
      } catch (error) {
        console.log("init profile error", error);
      }
*/
      this.state.connecting = false;
    },
  },
  modules: {},
});
