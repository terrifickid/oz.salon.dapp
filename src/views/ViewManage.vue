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
  methods: {
    openMetaMaskUrl(url) {
      const a = document.createElement("a");
      a.href = url;
      a.target = "_self";
      document.body.appendChild(a);
      a.click();
      a.remove();
    },
  },
  mounted() {
    console.log("Mobile Check!", this.isMobile);
    if (this.isMobile) {
      if (!this.isMetaMaskBrowser) {
        this.openMetaMaskUrl(
          "https://metamask.app.link/dapp/salondao.xyz/" + window.location.hash
        );
      }
    }
  },
};
</script>
