<template>
  <div :class="backgroundClass">
    <div v-if="walletAddress">
      <AppHeader :backgroundClass="backgroundClass" :textClass="textClass" />
      <slot></slot>
      <AppFooter :backgroundClass="backgroundClass" :fillClass="fillClass" />
    </div>
    <div v-if="!walletAddress">
      <WalletConnect
        :textClass="textClass"
        :backgroundClass="backgroundClass"
        :fillClass="fillClass"
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
