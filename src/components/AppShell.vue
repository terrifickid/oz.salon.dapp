<template>
  <div class="font-haffer">
    <div
      v-if="networkError"
      class="flex min-h-screen items-center justify-center w-screen px-6 text-center"
    >
      {{ networkError }}
    </div>
    <div v-else>
      <div v-if="check">
        <AppLoaderFull v-if="!ready" />
        <div v-show="ready">
          <slot></slot>
        </div>
        <AppFooter />
      </div>
      <div v-if="!check">
        <WalletConnect v-if="!this.login" />
        <AppJoin v-if="0" class="pt-16" />
        <AppFooter />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import _ from "lodash";
import AppFooter from "@/components/AppFooter.vue";
import AppLoaderFull from "@/components/AppLoaderFull.vue";
import AppJoin from "@/components/AppJoin.vue";
import WalletConnect from "@/components/WalletConnect.vue";
export default {
  components: { AppLoaderFull, AppFooter, WalletConnect, AppJoin },
  data() {
    return {};
  },
  props: ["isLoaded", "protected", "kycAllowed"],
  computed: {
    check() {
      if (!this.protected) return true;
      return _.get(this, "login");
    },
    debug() {
      return "test";
    },

    profile() {
      return this.$store.state.profile;
    },
    login() {
      return this.$store.state.login;
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
    disconnect() {
      this.$store.dispatch("disconnect");
    },
  },
};
</script>
