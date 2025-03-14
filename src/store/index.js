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
    },
    async connect({ commit }, { username, password }) {
      console.log("Connecting!", { username, password });
      this.state.networkError = false;
      this.state.connecting = true;
      try {
        const res = await axios.post(process.env.VUE_APP_URI + "/login", {
          username,
          password,
        });
        switch (res.status) {
          case 200:
            this.state.profile = res.data;
            this.state.login = { username, password };
            console.log("init profile", this.state.profile);
            break;
          default:
            console.log("login failed", res);
            this.state.networkError = res.data;
            break;
        }
      } catch (error) {
        console.log("init profile error", error);

        this.state.networkError = _.get(
          error,
          "response.data",
          "Login failed, please try again."
        );
      }
      this.state.connecting = false;
    },
  },
  modules: {},
});
