<template>
  <AppButton @click="vote()" :disabled="processing">
    {{ label }}
    <svg
      v-if="voted"
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 ml-1"
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
import axios from "axios";
import AppButton from "@/components/AppButton.vue";
export default {
  components: { AppButton },
  props: ["id", "votes", "choice", "label"],
  data() {
    return {
      processing: false,
    };
  },
  computed: {
    walletAddress() {
      return this.$store.state.walletAddress;
    },
    voted() {
      if (!this.votes) return false;
      var voted = false;
      if ("en-US" in this.votes) {
        this.votes["en-US"].votes.forEach((vote) => {
          if (vote.address == this.walletAddress && vote.vote) voted = true;
        });
      }
      return voted;
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
        const signature = await this.$store.state.signer.signMessage(vote);
        console.log("Sending Vote!");
        const res = await axios.post(
          "https://salontest-terrifickid.cloud.okteto.net/vote/" + this.id,
          {
            address: this.walletAddress,
            vote: vote,
            signature: signature,
          }
        );
        console.log(res.data);
        location.reload();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
