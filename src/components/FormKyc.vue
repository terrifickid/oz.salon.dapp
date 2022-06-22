<template>
  <full-page ref="fullpage" :options="options">
    <div class="section">
      <div class="grid grid-cols-12 px-3">
        <InputText
          class="col-span-11 md:col-span-6 md:col-start-2"
          :count="1"
          :title="'Form Field Title'"
          :required="true"
          @clicked="next"
        />
      </div>
    </div>
    <div class="section">
      <div class="grid grid-cols-12 px-3">
        <InputText
          class="col-span-11 md:col-span-6 md:col-start-2"
          :count="2"
          :title="'Form Field Title'"
          :required="true"
          @clicked="next"
        />
      </div>
    </div>
    <div class="section">
      <div class="grid grid-cols-12 px-3">
        <InputText
          class="col-span-11 md:col-span-6 md:col-start-2"
          :count="3"
          :title="'Form Field Title'"
          :required="true"
          @clicked="next"
        />
      </div>
    </div>
    <div class="section">
      <div class="grid grid-cols-12 px-3">
        <InputText
          class="col-span-11 md:col-span-6 md:col-start-2"
          :count="4"
          :title="'Form Field Title'"
          :required="true"
          @clicked="next"
        />
      </div>
    </div>
  </full-page>
</template>
<script>
import axios from "axios";
import InputText from "@/components/Form/InputText.vue";
export default {
  components: { InputText },
  data() {
    return {
      btnTxt: "Submit",
      sending: false,
      options: {
        licenseKey: "K9EP6-N164H-2BKM8-MJLGI-KSURM",
        controlArrows: true,
        scrollBar: false,
        scrollingSpeed: 500,
        navigation: true,
        navigationPosition: "right",
      },
    };
  },
  methods: {
    next() {
      console.log("next");
      this.$refs.fullpage.api.moveSectionDown();
    },
    async submitForm() {
      this.sending = true;
      this.btnTxt = "Sending...";
      console.log("Ran Submit!");
      try {
        const res = await axios.post(
          "https://salontest-terrifickid.cloud.okteto.net/onboard",
          {
            walletAddress: this.userAddress,
            legalNameOfPerson: this.legalNameOfPerson,
          }
        );
        console.log("success", res.data);
        this.$store.dispatch("connect");
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
