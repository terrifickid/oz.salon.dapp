<template>
  <div :class="salonClass" class="font-haffer">
    <div
      v-if="networkError"
      class="flex min-h-screen items-center justify-center w-screen"
    >
      {{ networkError }}
    </div>
    <div v-else>
      <div v-if="check">
        <AppLoader v-if="!ready" />
        <div v-show="ready"><slot></slot></div>
        <AppFooter :colors="colors" />
      </div>
      <div v-if="!check">
        <WalletConnect v-if="!this.walletAddress" />
        <AppJoin v-if="this.walletAddress" class="pt-16" />
        <AppFooter :colors="colors" />
      </div>
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
  data() {
    return {
      colors: ["white", "black"],
    };
  },
  props: ["isLoaded", "protected", "kycAllowed"],
  computed: {
    check() {
      if (!this.protected) return true;

      if (this.kycAllowed && this.profile.kycApproved) return true;

      if ("units" in this.profile) {
        return this.profile.units;
      }
      return false;
    },
    debug() {
      return "test";
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
    networkError() {
      return this.$store.state.networkError;
    },
    connecting() {
      return this.$store.state.connecting;
    },
    ready() {
      return this.isLoaded;
    },
  },
  methods: {
    mounted() {},
    connect() {
      this.$store.dispatch("connect");
    },
    disconnect() {
      this.$store.dispatch("disconnect");
    },
  },
};
</script>
