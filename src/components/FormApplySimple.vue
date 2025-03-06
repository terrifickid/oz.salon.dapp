<template>
  <AppContent class="items-center justify-center">
    <div class="grid grid-cols-12">
      <div
        class="col-span-12 sm:col-span-10 sm:col-start-2 lg:col-span-8 lg:col-start-3"
      >
        <form v-on:submit.prevent="createProposal" class="w-full">
          <FormLabel :count="1" :required="false">Onboard</FormLabel>
          <span class="block text-lg lg:text-xl font-light mb-4"
            >How many Units would you like to buy?
            <input
              type="number"
              class="text-lg lg:text-xl bg-transparent border-b border-black w-24 text-black py-3 outline-none placeholder-black font-light"
              required
              v-model="sAmount" />
            For how much?
            <input
              type="number"
              class="text-lg lg:text-xl bg-transparent border-b border-black w-24 text-black py-3 outline-none placeholder-black font-light"
              v-model="usdcAmount"
              required
          /></span>

          <FormButtonOk @ready="$emit('ready')" />
        </form>
      </div>
    </div>
  </AppContent>
</template>
<script>
import axios from "axios";
import AppContent from "@/components/AppContent.vue";
import FormButtonOk from "@/components/Form/FormButtonOk.vue";
import FormLabel from "@/components/Form/FormLabel.vue";
export default {
  components: { AppContent, FormLabel, FormButtonOk },
  data() {
    return {
      btnTxt: "Submit",
      processing: false,
      usdcAmount: "",
      sAmount: "",
    };
  },
  methods: {
    async createProposal() {
      this.btnTxt = "Processing...";
      this.processing = true;
      console.log("Creating Proposal...");
      try {
        const res = await axios.post(process.env.VUE_APP_URI + "/onboard", {
          profile: this.$store.state.profile,
          amount: this.usdcAmount.toString(),
          units: this.sAmount.toString(),
        });
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
