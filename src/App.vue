<template>
  <div>
    <div
      class="min-h-screen min-w-full flex items-center justify-center"
      v-show="!ready"
    ></div>
    <div v-show="ready">
      <AppHeader :colors="colors" class="keyboard-off" />
      <router-view />
    </div>
  </div>
</template>
<script>
import AppHeader from "@/components/AppHeader";
export default {
  data() {
    return {
      colors: ["white", "black"],
      fontsLoaded: false,
    };
  },
  components: { AppHeader },
  async beforeMount() {
    var connected = localStorage.getItem("salon_login");
    console.log("connected is:", connected);
    if (connected == true) {
      console.log("Reconnecting!");
      this.$store.dispatch("connect");
    }

    /*
    var loading = setInterval(async () => {
      if (document.fonts.check("1rem Manrope")) {
        this.fontsLoaded = true;
        clearInterval(loading);
        console.log("Fonts Loaded!");
      }
    }, 10);
*/

    if (window.ethereum) {
      window.ethereum.on("accountsChanged", async () => {
        await this.$store.dispatch("disconnect");
        await this.$store.dispatch("connect");
      });
    }
  },
  computed: {
    ready() {
      return true;
      /*
      if (this.fontsLoaded == true) return true;
      return false;
      */
    },
  },
};
</script>
<style lang="scss">
.router-link-active button {
  background-color: black !important;
  color: white !important;
}
</style>
