<template>
  <button
    @click="yes()"
    :class="{ 'bg-black': voted, 'text-white': voted }"
    class="border p-2 mr-2"
  >
    Yes
  </button>
</template>
<script>
import axios from "axios";
export default {
  props: ["id", "votes"],
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    userAddress() {
      if ("walletAddress" in this.profile)
        return this.profile.walletAddress["en-US"];
      return false;
    },
    voted() {
      if (!this.votes) return false;
      var voted = false;
      if ("en-US" in this.votes) {
        this.votes["en-US"].votes.forEach((vote) => {
          if (vote.address == this.userAddress && vote.vote) voted = true;
        });
      }
      return voted;
    },
  },
  methods: {
    async yes() {
      const vote = JSON.stringify({
        address: this.userAddress,
        vote: true,
        proposal: this.id,
      });

      //Sign Message and Vote
      try {
        const signature = await this.$store.state.signer.signMessage(vote);
        console.log("Sending Vote!");
        const res = await axios.post(
          "https://salontest-terrifickid.cloud.okteto.net/vote",
          {
            address: this.userAddress,
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
