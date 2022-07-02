import { createStore } from "vuex";
import { ethers } from "ethers";
import axios from "axios";

export default createStore({
  state: {
    connecting: false,
    walletAddress: null,
    provider: null,
    signer: null,
    members: [],
    profile: { loading: true },
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
      this.state.walletAddress = null;
      this.state.profile = { loading: true };
      this.state.provider = null;
      this.state.signer = null;

      localStorage.setItem("salon_login", 0);
    },
    async connect() {
      console.log("Connecting!");
      this.state.connecting = true;
      this.state.provider = new ethers.providers.Web3Provider(window.ethereum);
      await this.state.provider.send("eth_requestAccounts", []);
      this.state.signer = this.state.provider.getSigner();
      this.state.walletAddress = await this.state.signer.getAddress();
      try {
        const res = await axios.post(
          "https://salontest-terrifickid.cloud.okteto.net/profile",
          { walletAddress: this.state.walletAddress }
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
