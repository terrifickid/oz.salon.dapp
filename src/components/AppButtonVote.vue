<template>
  <AppButton
    @click="vote()"
    :disabled="processing"
    class="flex items-center"
    :class="{ active: voted }"
    v-if="!hasEnded"
  >
    {{ label }}
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
  props: ["id", "votes", "choice", "label"],
  data() {
    return {
      processing: false,
    };
  },
  computed: {
    hasEnded() {
      return typeof _.get(this.votes, "passed") == "boolean";
    },
    walletAddress() {
      return this.$store.state.walletAddress;
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
      const vote = JSON.stringify({
        address: this.walletAddress,
        vote: this.choice,
        proposal: this.id,
      });

      //Sign Message and Vote
      try {
        var provider = new ethers.providers.Web3Provider(
          window.ethereum,
          "any"
        );
        var signer = provider.getSigner();
        const signature = await signer.signMessage(vote);
        console.log("Sending Vote!");
        const res = await axios.post(this.uri, {
          address: this.walletAddress,
          vote: vote,
          signature: signature,
        });
        console.log(res.data);
        location.reload();
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
