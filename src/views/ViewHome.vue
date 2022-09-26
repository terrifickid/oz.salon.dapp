<template>
  <AppShell :isLoaded="true" :protected="false" class="font-haffer">
    home1
  </AppShell>
</template>

<script>
// @ is an alias to /src
import AppShell from "@/components/AppShell";
export default {
  name: "HomeView",
  components: { AppShell },

  computed: {
    walletAddress() {
      return this.$store.state.walletAddress;
    },
  },
  methods: {
    async disconnect() {
      await this.$store.dispatch("disconnect");
    },
  },
};
</script>
