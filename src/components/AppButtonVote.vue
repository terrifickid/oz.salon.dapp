<template>
  <AppButton
    @click="vote()"
    :disabled="processing"
    class="flex items-center"
    :class="{ active: voted }"
    v-if="!hasEnded"
  >
    <span v-if="!isProcessing">{{ label }}</span>
    <svg
      v-else
      class="size-5 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>

    <svg
      v-if="voted"
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5 ml-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </AppButton>
</template>
<script>
import _ from "lodash";
import axios from "axios";
import AppButton from "@/components/AppButton.vue";
import { ethers } from "ethers";
export default {
  components: { AppButton },
  props: ["id", "votes", "choice", "label", "processing"],
  computed: {
    isProcessing() {
      return this.processing == this.label;
    },
    hasEnded() {
      return typeof _.get(this.votes, "passed") == "boolean";
    },
    walletAddress() {
      return this.$store.state.walletAddress;
    },
    login() {
      return this.$store.state.login;
    },
    voted() {
      if (!this.votes) return false;
      var voted = false;
      this.votes.votes.forEach((vote) => {
        var v = JSON.parse(vote.vote);
        if (v.address == this.walletAddress && v.vote == this.choice)
          voted = true;
      });

      return voted;
    },
    uri() {
      return process.env.VUE_APP_URI + "/vote/" + this.id;
    },
  },
  methods: {
    async vote() {
      this.$emit("voting", this.label);
      const vote = JSON.stringify({
        address: this.walletAddress,
        vote: this.choice,
        proposal: this.id,
      });

      //Sign Message and Vote
      try {
        console.log("Sending Vote!");
        const res = await axios.post(this.uri, {
          address: this.walletAddress,
          vote: vote,
          signature: this.login,
        });
        console.log(res.data);
        this.$emit("voted");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style scoped>
.active {
  background: black !important;
  color: white !important;
}
</style>
