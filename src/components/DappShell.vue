<template>
  <div :class="backgroundClass" class="min-h-screen">
    <div v-if="walletAddress">
      <AppHeader :backgroundClass="backgroundClass" :textClass="textClass" />
      <slot v-if="ready"></slot>
      <AppFooter :backgroundClass="backgroundClass" :fillClass="fillClass" />
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
import WalletConnect from "@/components/WalletConnect.vue";
export default {
  props: ["backgroundClass", "textClass", "fillClass"],
  components: { AppFooter, AppHeader, WalletConnect },
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
    ready() {
      return this.walletAddress && !("loading" in this.profile);
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
