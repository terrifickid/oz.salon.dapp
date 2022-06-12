import { createStore } from "vuex";
import { ethers } from "ethers";
import axios from "axios";

export default createStore({
  state: {
    userAddress: null,
    provider: null,
    signer: null,
    members: [],
  },
  getters: {
    getMembers(state) {
      const a = JSON.stringify(state.members);
      return JSON.parse(a);
    },
  },
  mutations: {},
  actions: {
    async init() {
      console.log("Ran init!");
      try {
        const res = await axios.get(
          "https://salontest-terrifickid.cloud.okteto.net/members"
        );
        console.log("init success", res.data);
        this.state.members = res.data;
      } catch (error) {
        console.log("init error", error);
      }
    },
    async disconnect() {
      this.state.provider = null;
      this.state.signer = null;
      this.state.userAddress = null;
    },
    async connect() {
      // A Web3Provider wraps a standard Web3 provider, which is
      // what MetaMask injects as window.ethereum into each page
      this.state.provider = new ethers.providers.Web3Provider(window.ethereum);
      // MetaMask requires requesting permission to connect users accounts
      await this.state.provider.send("eth_requestAccounts", []);
      // The MetaMask plugin also allows signing transactions to
      // send ether and pay to change state within the blockchain.
      // For this, you need the account signer...
      this.state.signer = this.state.provider.getSigner();
      this.state.userAddress = await this.state.signer.getAddress();
    },
  },
  modules: {},
});
