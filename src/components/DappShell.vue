<template>
  <div>
    <AppHeader :background="'bg-canary'" :text="'text-black'" />
    <slot></slot>
    <AppFooter :background="'bg-canary'" :fill="'fill-black'" />
  </div>
</template>

<script>
// @ is an alias to /src

import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";
export default {
  name: "DappHome",
  components: { AppFooter, AppHeader },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    walletAddress() {
      return this.$store.state.walletAddress;
    },
    connecting() {
      return this.$store.state.connecting;
    },
  },
  methods: {
    connect() {
      this.$store.dispatch("connect");
    },
    disconnect() {
      this.$store.dispatch("disconnect");
    },
  },
};
</script>
