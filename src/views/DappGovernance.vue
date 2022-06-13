<template>
  <DappShell><ListGovernance /></DappShell>
</template>

<script>
// @ is an alias to /src
import DappShell from "@/components/DappShell";
import ListGovernance from "@/components/ListGovernance";
export default {
  components: { DappShell, ListGovernance },
  computed: {
    isMember() {
      var found = false;
      this.members.forEach((item) => {
        if (item.wallet == this.userAddress) {
          found = true;
        }
      });
      return found;
    },
    userAddress() {
      return this.$store.state.userAddress;
    },
    members() {
      return this.$store.getters.getMembers;
    },
  },
  methods: {
    connect() {
      this.$store.dispatch("connect");
    },
  },
};
</script>
