<template>
  <div :class="salonClass">
    <div v-if="walletCheck">
      <AppLoader v-if="!ready" />
      <slot v-if="ready"></slot>
      <AppFooter :colors="colors" class="keyboard-off" />
    </div>
    <div v-if="!walletCheck">
      <AppContent class="items-center justify-center">
        <WalletConnect />
      </AppContent>
      <AppFooter :colors="colors" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import AppFooter from "@/components/AppFooter.vue";
import AppLoader from "@/components/AppLoader.vue";
import AppContent from "@/components/AppContent.vue";
import WalletConnect from "@/components/WalletConnect.vue";
export default {
  components: { AppFooter, AppLoader, WalletConnect, AppContent },
  props: ["colors", "isLoaded", "protected"],
  computed: {
    walletCheck() {
      if (!this.protected) return true;
      return this.walletAddress;
    },
    salonClass() {
      return "bg-" + this.colors[0] + " " + "text-" + this.colors[1];
    },
    profile() {
      return this.$store.state.profile;
    },
    walletAddress() {
      return this.$store.state.walletAddress;
    },
    connecting() {
      return this.$store.state.connecting;
    },
    ready() {
      return this.isLoaded;
    },
  },
  methods: {
    mounted() {
      console.log(this.background);
    },
    connect() {
      this.$store.dispatch("connect");
    },
    disconnect() {
      this.$store.dispatch("disconnect");
    },
  },
};
</script>
