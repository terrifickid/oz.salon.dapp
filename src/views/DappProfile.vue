<template>
  <DappShell>
    <h1>profile</h1>
    {{ profile }}
  </DappShell>
</template>

<script>
// @ is an alias to /src
import DappShell from "@/components/DappShell";
export default {
  components: { DappShell },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
  },
};
</script>
