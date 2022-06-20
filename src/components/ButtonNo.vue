<template>
  <button
    @click="no()"
    class="mx-auto mt-3 bg-lilac text-white rounded px-4 py-3 text-xl shadow-sm op flex items-center w-32 justify-center"
  >
    No
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
  </button>
</template>
<script>
import axios from "axios";
export default {
  props: ["id", "votes"],
  computed: {
    voted() {
      if (!this.votes) return false;
      var voted = false;
      if ("en-US" in this.votes) {
        this.votes["en-US"].votes.forEach((vote) => {
          if (vote.address == this.$store.state.userAddress && !vote.vote)
            voted = true;
        });
      }
      return voted;
    },
  },
  methods: {
    async no() {
      const vote = JSON.stringify({
        address: this.$store.state.userAddress,
        vote: false,
        proposal: this.id,
      });

      //Sign Message and Vote
      try {
        const signature = await this.$store.state.signer.signMessage(vote);
        console.log("Sending Vote!");
        const res = await axios.post(
          "https://salontest-terrifickid.cloud.okteto.net/vote",
          {
            address: this.$store.state.userAddress,
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
