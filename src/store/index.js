import { createStore } from "vuex";
import { ethers } from "ethers";
import axios from "axios";

export default createStore({
  state: {
    connecting: false,
    userAddress: null,
    provider: null,
    signer: null,
    members: [],
    profile: {},
  },
  getters: {
    getMembers(state) {
      const a = JSON.stringify(state.members);
      return JSON.parse(a);
    },
  },
  mutations: {},
  actions: {
    async disconnect() {
      this.state.provider = null;
      this.state.signer = null;
      this.state.walletAddress = null;
      this.state.profile = {};
      localStorage.setItem("salon_login", false);
    },
    async connect() {
      console.log("Connecting!");
      this.state.connecting = true;
      // A Web3Provider wraps a standard Web3 provider, which is
      // what MetaMask injects as window.ethereum into each page
      this.state.provider = new ethers.providers.Web3Provider(window.ethereum);
      // MetaMask requires requesting permission to connect users accounts
      await this.state.provider.send("eth_requestAccounts", []);
      // The MetaMask plugin also allows signing transactions to
      // send ether and pay to change state within the blockchain.
      // For this, you need the account signer...
      this.state.signer = this.state.provider.getSigner();
      this.state.walletAddress = await this.state.signer.getAddress();
      try {
        const res = await axios.post(
          "https://salontest-terrifickid.cloud.okteto.net/profile",
          { walletAddress: this.state.walletAddress }
        );
        console.log("init profile", res.data);
        this.state.profile = res.data;
        localStorage.setItem("salon_login", true);
      } catch (error) {
        console.log("init profile error", error);
      }
      this.state.connecting = false;
    },
  },
  modules: {},
});
