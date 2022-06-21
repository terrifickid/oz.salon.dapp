<template>
  <div :class="salonClass" class="min-h-screen">
    <div v-if="walletAddress">
      <AppHeader :colors="colors" />

      <AppLoader v-if="!ready" />

      <slot v-if="ready"></slot>
      <AppFooter :colors="colors" />
    </div>
    <div v-if="!walletAddress">
      <WalletConnect
        :textClass="'text-black'"
        :backgroundClass="'bg-tope'"
        :fillClass="'fill-black'"
        class="fixed h-full"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppLoader from "@/components/AppLoader.vue";
import WalletConnect from "@/components/WalletConnect.vue";
export default {
  components: { AppFooter, AppLoader, AppHeader, WalletConnect },
  props: ["colors", "isLoaded"],
  computed: {
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
      return (
        this.walletAddress && !("loading" in this.profile) && this.isLoaded
      );
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
