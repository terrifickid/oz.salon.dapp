import { createStore } from "vuex";
import { ethers } from "ethers";
import axios from "axios";
import _ from "lodash";
export default createStore({
  state: {
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
      this.state.walletAddress = null;
      this.state.profile = { loading: true };

      localStorage.setItem("salon_login", 0);
    },
    async connect() {
      console.log("Connecting!");
      if (typeof window.ethereum == "undefined") return;
      this.state.connecting = true;
      var provider = new ethers.providers.Web3Provider(window.ethereum, "any");
      provider.on("network", (newNetwork, oldNetwork) => {
        console.log("switch!");
        // When a Provider makes its initial connection, it emits a "network"
        // event with a null oldNetwork along with the newNetwork. So, if the
        // oldNetwork exists, it represents a changing network
        if (oldNetwork) {
          window.location.reload();
        }
      });

      var id = await provider.getNetwork();
      console.log("ID", id);
      if (process.env.VUE_APP_CHAIN_NAME != id.name) {
        var msg;
        switch (process.env.VUE_APP_CHAIN_NAME) {
          case "goerli":
            msg = "Please connect to the Goerli Test Network to continue.";
            break;
          case "homestead":
            msg = "Please connect to the Ethereum Mainnet to continue.";
            break;
        }
        this.state.networkError = msg;
        return;
      }
      await provider.send("eth_requestAccounts", []);
      var signer = provider.getSigner();
      this.state.walletAddress = await signer.getAddress();
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

      this.state.connecting = false;
    },
  },
  modules: {},
});
