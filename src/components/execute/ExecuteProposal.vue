<template>
  <!-- Exchange -->
  <ExecuteExchange :item="proposal" v-if="type == 'exchange'" />
  <!-- Kick -->
  <ExecuteKick
    :item="proposal"
    v-else-if="type == 'kick' && passed && hasEnded"
  />
  <ExecuteInvest
    :proposal="proposal"
    class="mb-32"
    v-else-if="type == 'invest' && hasEnded && passed"
  />
</template>

<script>
import _ from "lodash";

import ExecuteExchange from "@/components/execute/ExecuteExchange";
import ExecuteKick from "@/components/execute/ExecuteKick";
import ExecuteInvest from "@/components/execute/ExecuteInvest";
export default {
  components: { ExecuteExchange, ExecuteKick, ExecuteInvest },
  props: ["proposal"],
  computed: {
    type() {
      return _.get(this.proposal, "sys.contentType.sys.id");
    },
    hasEnded() {
      return typeof _.get(this.proposal, "fields.votes.passed") == "boolean";
    },
    passed() {
      return _.get(this.proposal, "fields.votes.passed") === true;
    },
    walletAddress() {
      return this.$store.state.walletAddress;
    },
    ownsProposal() {
      return (
        _.get(this.proposal, "fields.profile.walletAddress") ==
        this.walletAddress
      );
    },
  },
  async mounted() {
    this.loaded = true;
  },
};
</script>
