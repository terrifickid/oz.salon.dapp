<template>
  <div :class="salonClass" class="font-haffer">
    <div v-if="check">
      <AppLoader v-if="!ready" />
      <slot v-if="ready"></slot>
      <AppFooter :colors="colors" />
    </div>
    <div v-if="!check">
      <WalletConnect v-if="!this.walletAddress" />
      <AppJoin v-if="this.walletAddress" />
      <AppFooter :colors="colors" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppFooter from "@/components/AppFooter.vue";
import AppLoader from "@/components/AppLoader.vue";
import AppJoin from "@/components/AppJoin.vue";
import WalletConnect from "@/components/WalletConnect.vue";
export default {
  components: { AppLoader, AppFooter, WalletConnect, AppJoin },
  props: ["colors", "isLoaded", "protected"],
  computed: {
    check() {
      if (!this.protected) return true;
      if ("units" in this.profile) {
        return this.profile.units;
      }
      return false;
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
