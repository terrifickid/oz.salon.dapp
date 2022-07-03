<template>
  <div class="text-xs">
    <div class="bg-black w-full relative my-3" style="height: 2px">
      <div
        class="bg-green-400 absolute z-20"
        style="height: 2px"
        :style="{ width: percentageYes + '%' }"
      ></div>
      <div
        class="bg-red-400 absolute z-10"
        style="height: 2px"
        :style="{ width: percentageYes + percentageNo + '%' }"
      ></div>
    </div>

    <div>Total Votes: {{ total }}</div>
    <div>Yes: {{ yesTotal }}</div>
    <div>No: {{ noTotal }}</div>
  </div>
</template>
<script>
export default {
  props: ["votes", "weights"],
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
    w() {
      var weight = {};
      for (let w of this.weights) {
        weight[w.fields.walletAddress] = w.fields.units;
      }
      return weight;
    },
    totalUnits() {
      var total = 0;
      Object.values(this.w).forEach(
        (e) => (total = parseInt(total) + parseInt(e))
      );
      return total;
    },
    wNormal() {
      var max = this.totalUnits * 0.1;
      var weight = {};
      for (let w of this.weights) {
        weight[w.fields.walletAddress] = w.fields.units;
        if (w.fields.units > max) weight[w.fields.walletAddress] = max;
      }
      return weight;
    },
    yesWeight() {
      var weight = 0;
      var scope = this;
      this.votes.votes.forEach(function (vote) {
        var v = JSON.parse(vote.vote);
        if (v.vote)
          weight = parseInt(weight) + parseInt(scope.wNormal[v.address]);
      });
      return weight;
    },
    noWeight() {
      var weight = 0;
      var scope = this;
      this.votes.votes.forEach(function (vote) {
        var v = JSON.parse(vote.vote);
        if (!v.vote)
          weight = parseInt(weight) + parseInt(scope.wNormal[v.address]);
      });
      return weight;
    },
    percentageYes() {
      if (!this.totalUnits || !this.yesWeight) return 0;
      return Math.round((this.yesWeight / this.totalUnits) * 100);
    },
    percentageNo() {
      if (!this.totalUnits || !this.noWeight) return 0;
      return Math.round((this.noWeight / this.totalUnits) * 100);
    },
  },
};
</script>
