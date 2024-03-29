<template>
  <div v-if="mode">{{ yesPercentageTally }}% / {{ noPercentageTally }}%</div>
  <div v-if="!mode">
    <div class="grid grid-cols-12 py-4">
      <div class="col-span-4 sm:col-span-3 md:col-span-3">Votes</div>
      <div class="col-span-4 sm:col-span-2">{{ total }}</div>
    </div>
    <div class="grid grid-cols-12">
      <div class="col-span-4 sm:col-span-3 md:col-span-3">Yes</div>
      <div class="col-span-4 sm:col-span-2 md:col-span-3 lg:col-span-2">
        {{ yesPercentageTally }}%
      </div>
      <div class="col-span-4 md:col-span-2">
        {{ yesWeight.toLocaleString() }} units
      </div>
    </div>
    <div class="grid grid-cols-12">
      <div class="col-span-4 sm:col-span-3 md:col-span-3">No</div>
      <div class="col-span-4 sm:col-span-2 md:col-span-3 lg:col-span-2">
        {{ noPercentageTally }}%
      </div>
      <div class="col-span-4 sm:col-span-2 md:col-span-3 lg:col-span-2">
        {{ noWeight.toLocaleString() }} units
      </div>
    </div>

    <div class="py-6" v-if="hasEnded">
      <div v-if="!passed" class="text-red-500">This did not pass.</div>
      <div
        v-else
        class="flex items-center text-green-500"
        v-html="passType"
      ></div>
    </div>
  </div>
</template>
<script>
import _ from "lodash";
export default {
  props: ["votes", "members", "mode"],
  methods: {
    getDelegatedUnits(members, address) {
      var units = 0;
      members.forEach(function (item) {
        if (address == _.get(item, "fields.delegate"))
          units = units + _.get(item, "fields.units");
        if (
          address == _.get(item, "fields.walletAddress") &&
          _.get(item, "fields.delegate") == 0
        )
          units = units + _.get(item, "fields.units");
      });
      return units;
    },
  },
  computed: {
    weights() {
      return this.members.map((member) => {
        var obj = {};
        obj.walletAddress = member.fields.walletAddress;
        obj.units = this.getDelegatedUnits(
          this.members,
          member.fields.walletAddress
        );
        if (obj.units > this.maxUnits) obj.units = this.maxUnits;
        return obj;
      });
    },
    hasEnded() {
      return typeof _.get(this.votes, "passed") == "boolean";
    },
    totalUnits() {
      var totalUnits = this.members
        .map((item) => item.fields.units)
        .reduce((partialSum, a) => partialSum + a, 0);
      return totalUnits;
    },
    maxUnits() {
      return Math.round(this.totalUnits * 0.1);
    },
    totalValidUnits() {
      return this.weights
        .map((item) => item.units)
        .reduce((partialSum, a) => partialSum + a, 0);
    },
    total() {
      return _.get(this.votes, "votes.length");
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
    wNormal() {
      var max = this.totalUnits * 0.1;
      var weight = {};
      for (let w of this.weights) {
        weight[w.walletAddress] = w.units;
        if (w.units > max) weight[w.walletAddress] = max;
      }
      return weight;
    },
    yesWeight() {
      var weight = 0;
      var scope = this;
      this.votes.votes.forEach(function (vote) {
        var v = JSON.parse(vote.vote);
        if (!scope.wNormal[v.address]) return;
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
        if (!scope.wNormal[v.address]) return;
        if (!v.vote)
          weight = parseInt(weight) + parseInt(scope.wNormal[v.address]);
      });
      return weight;
    },
    yesPercentageTally() {
      if (!this.total) return 0;
      var p = Math.round(
        (this.yesWeight / (this.yesWeight + this.noWeight)) * 100
      );
      if (Number.isNaN(p)) return 0;
      return p;
    },
    noPercentageTally() {
      if (!this.total) return 0;
      var p = Math.round(
        (this.noWeight / (this.yesWeight + this.noWeight)) * 100
      );
      if (Number.isNaN(p)) return 0;
      return p;
    },
    percentageYes() {
      if (!this.totalUnits || !this.yesWeight) return 0;
      return Math.round((this.yesWeight / this.totalValidUnits) * 100);
    },
    percentageNo() {
      if (!this.totalUnits || !this.noWeight) return 0;
      return Math.round((this.noWeight / this.totalValidUnits) * 100);
    },
    passed() {
      return this.yesPercentageTally > this.noPercentageTally;
    },
    passType() {
      var type =
        '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>This passed with majority.';
      if (this.percentageYes > 50)
        type =
          '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>This passed with true majority.';
      if (this.percentageYes > 75)
        type =
          '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>This passed with supermajority.';
      return type;
    },
  },
};
</script>
