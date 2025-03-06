<template>
  <AppContent class="items-center justify-center">
    <div class="grid grid-cols-12">
      <div class="app-frame">
        <form v-on:submit.prevent="createProposal" class="w-full">
          <div
            class="block text-3xl md:text-4xl mb-4 flex items-center -ml-10 justify-center"
          >
            <span class="text-sm mr-1">1</span>
            <svg height="10" width="11" class="mr-4">
              <path
                d="M7.586 5L4.293 1.707 5.707.293 10.414 5 5.707 9.707 4.293 8.293z"
              ></path>
              <path d="M8 4v2H0V4z"></path></svg
            >Become a Membder *
            <span class="block text-lg lg:text-xl font-light opacity-75 mb-4"
              >How much capital are you committing to the DAO, in exchange for
              how many Units</span
            >
          </div>
          <div class="grid grid-cols-12 gap-6">
            <div class="col-span-12 sm:col-span-6">
              <input
                type="number"
                class="text-3xl bg-transparent block border-b border-black w-full text-black py-3 outline-none placeholder-black font-light"
                placeholder="$0.00"
                v-model="usdcAmount"
                required
              />
              <span
                class="block text-xs md:text-base mt-3 lg:text-md font-light opacity-75 mb-4"
                >This is the amount of capital are you committing to the
                DAO.</span
              >
            </div>
            <div class="col-span-12 sm:col-span-6">
              <input
                type="number"
                class="text-3xl bg-transparent block border-b border-black w-full text-black py-3 outline-none placeholder-black font-light"
                placeholder="S0"
                required
                v-model="sAmount"
              />
              <span
                class="block mt-3 text-xs md:text-base lg:text-md font-light opacity-75 mb-4"
                >This is the amount of DAO membership units you are requesting
                to be authorized in exchange.</span
              >
            </div>
          </div>

          <button
            type="submit"
            :disabled="processing"
            class="mx-auto mt-6 bg-black text-canary rounded px-4 py-3 text-xl shadow-sm op flex items-center w-64 justify-center"
          >
            {{ btnTxt }}
          </button>
        </form>
      </div>
    </div>
  </AppContent>
</template>
<script>
import axios from "axios";
import AppContent from "@/components/AppContent.vue";
import { ethers } from "ethers";
export default {
  components: { AppContent },
  data() {
    return {
      btnTxt: "Submit",
      processing: false,
      usdcAmount: "",
      sAmount: "",
    };
  },
  methods: {
    async initiate() {
      this.processing = true;
      var usdc = {
        address: "0x07865c6e87b9f70255377e024ace6630c1eaa37f",
        abi: [
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
      };
      let ethereum = window.ethereum;
      let provider = new ethers.providers.Web3Provider(ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const usdcContract = new ethers.Contract(usdc.address, usdc.abi, signer);
      var amt = ethers.utils
        .parseUnits(Number(this.usdcAmount).toFixed(1), 6)
        .toNumber();
      try {
        this.btnTxt = "Processing...";
        let transfer = await usdcContract.transfer(this.walletAddress, 1);
        console.log(transfer.hash, amt);
        await this.createProposal();
      } catch (err) {
        this.btnTxt = "Submit";
        this.processing = false;
        console.log(err);
      }
    },
    async createProposal() {
      this.btnTxt = "Processing...";
      this.processing = true;
      console.log("Creating Proposal...");
      try {
        const res = await axios.post(
          "https://salontest-terrifickid.cloud.okteto.net/onboard",
          {
            profile: this.$store.state.profile,
            usdc: this.usdcAmount,
            s: this.sAmount,
          }
        );
        if (res.data.result) {
          //this.$store.dispatch("connect");
        } else {
          console.log(res.data);
          this.btnTxt = "ERROR A1: Contact Support";
        }
      } catch (error) {
        console.log(error);
        this.btnTxt = "ERROR A2: Contact Support";
      }
    },
  },
  computed: {
    walletAddress() {
      return this.$store.state.walletAddress;
    },
  },
};
</script>
