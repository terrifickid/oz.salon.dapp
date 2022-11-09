<template>
  <AppShell :isLoaded="true" :protected="true">
    <div class="pt-20">
      <router-view></router-view>
    </div>
  </AppShell>
</template>

<script>
// @ is an alias to /src
import AppShell from "@/components/AppShell";
export default {
  components: { AppShell },
  data() {
    return {};
  },
  computed: {
    isMetaMaskBrowser() {
      if (/MetaMaskMobile/i.test(navigator.userAgent)) {
        return true;
      } else {
        return false;
      }
    },
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    console.log("Mobile Check!", this.isMobile);
    if (this.isMobile) {
      if (!this.isMetaMaskBrowser) {
        window.location.href =
          "https://metamask.app.link/dapp/salon-dev.on.fleek.co/" +
          window.location.hash;
      }
    }
  },
};
</script>
