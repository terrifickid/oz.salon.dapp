<template>
  <AppShell :colors="colors" :isLoaded="isReady" :protected="true">
    <AppContent class="items-center justify-center">
      <div class="grid grid-cols-12">
        <div
          class="col-span-12 sm:col-span-10 sm:col-start-2 lg:col-span-8 lg:col-start-3"
        >
          <form
            v-on:submit.prevent="createProposal"
            class="w-full"
            v-show="!sent"
          >
            <FormLabel :count="1" :required="false">Invest</FormLabel>
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

            <FormButtonOk />
          </form>

          <div class="px-3" v-show="sent">
            <p>Thank You</p>
            <p>Invest proposal has been submitted.</p>
          </div>
        </div>
      </div>
    </AppContent>
  </AppShell>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import FormLabel from "@/components/Form/FormLabel.vue";
import FormButtonOk from "@/components/Form/FormButtonOk.vue";
import AppShell from "@/components/AppShell.vue";
import AppContent from "@/components/AppContent.vue";
export default {
  components: { AppShell, AppContent, FormLabel, FormButtonOk },
  data() {
    return {
      colors: ["white", "black"],
      isReady: true,
      usdcAmount: "",
      sAmount: "",
      sent: false,
    };
  },
  methods: {
    async createProposal() {
      this.isReady = false;
      console.log("Submit Invest...");
      try {
        const res = await axios.post(process.env.VUE_APP_URI + "/form/invest", {
          profile: this.$store.state.profile,
          amountToInvest: this.usdcAmount.toString(),
          unitsRequested: this.sAmount.toString(),
        });
        if (res.data.result) {
          this.$store.dispatch("connect");
          this.isReady = true;
          this.sent = true;
        } else {
          console.log(res.data);
          this.isReady = true;
          alert("Error, please try again");
        }
      } catch (error) {
        console.log(error);
        this.isReady = true;
        alert("Error, please try again");
      }
    },
  },
};
</script>
