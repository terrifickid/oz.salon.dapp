<template>
  <div>
    <div>Total Votes: {{ total }}</div>
    <div>Yes: {{ yesTotal }}</div>
    <div>No: {{ noTotal }}</div>
  </div>
</template>
<script>
export default {
  props: ["votes"],
  computed: {
    total() {
      return this.votes.votes.length;
    },
    yesTotal() {
      return this.votes.votes.filter((vote) => {
        var v = JSON.parse(vote.vote);
        if (v.vote) return true;
      }).length;
    },
    noTotal() {
      return this.votes.votes.filter((vote) => {
        var v = JSON.parse(vote.vote);
        if (!v.vote) return true;
      }).length;
    },
  },
};
</script>
