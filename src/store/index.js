import { createStore } from "vuex";
import { ethers } from "ethers";
import axios from "axios";
import _ from "lodash";
export default createStore({
  state: {
    login: JSON.parse(localStorage.getItem("saloncookie154")) || null,
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
      return state.proposals.filter((item) => {
        return (
          !_.has(item, "fields.votes.passed") &&
          _.get(item, "fields.adminApproved") === true
        );
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
    setLogin(state, payload) {
      state.login = {
        username: payload.username,
        password: payload.password,
      };
      // Save to localStorage whenever login is updated
      localStorage.setItem("saloncookie154", JSON.stringify(state.login));
    },
  },
  actions: {
    async disconnect() {
      this.state.login = null;
      this.state.profile = { loading: true };
      localStorage.removeItem("saloncookie154");
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
            this.state.walletAddress = res.data.walletAddress;
            commit("setLogin", { username, password });
            console.log("init profile", this.state.profile);
            break;
          default:
            console.log("login failed", res);
            this.state.networkError = _.get(
              res,
              "data",
              "Login failed, please try again."
            );
            break;
        }
      } catch (error) {
        console.log("init profile error", error);
        this.state.profile = { loading: true };
        this.state.walletAddress = null;
        this.state.login = null;
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
