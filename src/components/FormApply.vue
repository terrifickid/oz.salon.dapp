<template>
  <form className="form lowercase" v-on:submit.prevent="submitForm">
    <h1>apply to join</h1>

    <p>
      <label>usdc amount</label>
      <input type="text" placeholder="30,000" />
      <span
        >This amount will be held in escrow pending a member vote. If the
        proposal passes, the funds will automatically be sent to the DAO. If the
        proposal fails, the funds will be refunded to you.</span
      >
    </p>

    <p>
      <label>request amount</label>
      <input type="text" />
      <span
        >This is the amount of DAO membership tokens you are requesting be sent
        to the Applicant Address in exchange for your tribute.</span
      >
    </p>

    <button
      class="bg-black p-3 text-white mt-4"
      :disabled="sending"
      type="submit"
    >
      {{ btnTxt }}
    </button>
  </form>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      btnTxt: "Submit",
      sending: false,
    };
  },
  methods: {
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
<style scoped>
label {
  margin: 1.5rem 0 0.25rem 0;
  display: block;
  font-weight: 1000;
}
input[type="text"] {
  border: 1px solid #eee;
  padding: 1rem;
  display: block;
  width: 100%;
}
</style>
