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
      return this.votes["en-US"].votes.length;
    },
    yesTotal() {
      return this.votes["en-US"].votes.filter((vote) => {
        if (vote.vote) return true;
      }).length;
    },
    noTotal() {
      return this.votes["en-US"].votes.filter((vote) => {
        if (!vote.vote) return true;
      }).length;
    },
  },
};
</script>
