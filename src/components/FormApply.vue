<template>
  <div class="grid grid-cols-12">
    <div
      class="col-span-12 sm:col-span-10 sm:col-start-2 md:col-span-8 md:col-start-3"
    >
      <form v-on:submit.prevent="submitForm" class="w-full">
        <label
          class="block text-3xl md:text-4xl mb-4 flex items-center -ml-10 justify-center"
          ><span class="text-sm mr-1">1</span>
          <svg height="10" width="11" class="mr-4">
            <path
              d="M7.586 5L4.293 1.707 5.707.293 10.414 5 5.707 9.707 4.293 8.293z"
            ></path>
            <path d="M8 4v2H0V4z"></path></svg
          >Apply to Join *</label
        >
        <span class="block text-lg lg:text-xl font-light opacity-75 mb-4"
          >The amount sent will be held in escrow pending a member vote. If the
          proposal passes, the funds will be sent to the DAO. If the proposal
          fails, the funds will be refunded to you.</span
        >
        <div class="grid grid-cols-12 gap-6">
          <div class="col-span-12 sm:col-span-6">
            <input
              type="text"
              class="text-3xl bg-transparent block border-b border-black w-full text-black py-3 outline-none placeholder-black font-light"
              placeholder="$0.00"
            />
            <span
              class="block text-xs md:text-base mt-3 lg:text-md font-light opacity-75 mb-4"
              >This is the amount of USDC tokens you are putting into escrow
              pending a governance vote for membership.</span
            >
          </div>
          <div class="col-span-12 sm:col-span-6">
            <input
              type="text"
              class="text-3xl bg-transparent block border-b border-black w-full text-black py-3 outline-none placeholder-black font-light"
              placeholder="S0"
            />
            <span
              class="block mt-3 text-xs md:text-base lg:text-md font-light opacity-75 mb-4"
              >This is the amount of DAO membership units you are requesting to
              be authorized in exchange.</span
            >
          </div>
        </div>

        <button
          @click="
            payWithMetamask(
              '0x419af08d5de5de5ed9edca29e345fea58931520b',
              '0x419af08d5de5de5ed9edca29e345fea58931520b',
              '1'
            )
          "
          class="mx-auto mt-6 bg-black text-canary rounded px-4 py-3 text-xl shadow-sm op flex items-center w-64 justify-center"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { ethers } from "ethers";
export default {
  data() {
    return {
      btnTxt: "Submit",
      sending: false,
      send_token_amount: "0",
    };
  },
  methods: {
    async payWithMetamask(sender, receiver, strEther) {
      console.log(
        `payWithMetamask(receiver=${receiver}, sender=${sender}, strEther=${strEther})`
      );

      let ethereum = window.ethereum;

      // Request account access if needed
      await ethereum.enable();

      let provider = new ethers.providers.Web3Provider(ethereum);

      // Acccounts now exposed
      const params = [
        {
          from: sender,
          to: receiver,
          value: ethers.utils.parseUnits(strEther, "ether").toHexString(),
        },
      ];

      const transactionHash = await provider.send(
        "eth_sendTransaction",
        params
      );
      console.log("transactionHash is " + transactionHash);
    },
    async submitForm() {
      this.sending = true;
      this.btnTxt = "Sending...";
      console.log("Ran Submit!");
      try {
        const res = await axios.post(
          "https://salontest-terrifickid.cloud.okteto.net/governance",
          {
            title: "Onboarding Proposal",
            legalNameOfPerson: "Tk Croft",
          }
        );
        if (res.data.result) {
          console.log("success!");
          this.btnTxt = "Application Sent!";
        } else {
          console.log("success!");
          this.btnTxt = "ERROR:: " + res.data.message;
        }
      } catch (error) {
        console.log("error", error);
        this.btnTxt = "error!";
      }
    },
  },
  computed: {
    userAddress() {
      return this.$store.state.userAddress;
    },
  },
};
</script>
