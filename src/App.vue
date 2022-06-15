<template>
  <div>
    <div
      class="min-h-screen min-w-full flex items-center justify-center"
      v-show="!ready"
    >
      <GlobalLoader /> &nbsp;
    </div>
    <div v-show="ready"><router-view /></div>
  </div>
</template>
<script>
import GlobalLoader from "@/components/GlobalLoader";
export default {
  data() {
    return {
      fontsLoaded: false,
    };
  },
  components: { GlobalLoader },
  async beforeMount() {
    var obj = JSON.parse(localStorage.getItem("salon_profile"));
    if (obj) {
      if ("approved" in obj) this.$store.dispatch("connect");
      this.$store.state.profile = obj;
    }
    var loading = setInterval(async () => {
      if (document.fonts.check("1rem Manrope")) {
        this.fontsLoaded = true;
        clearInterval(loading);
        console.log("Fonts Loaded!");
      }
    }, 10);

    window.ethereum.on("accountsChanged", () => {
      this.$store.dispatch("connect");
    });
  },
  computed: {
    members() {
      return this.$store.state.members;
    },
    ready() {
      if (this.fontsLoaded == true) return true;
      return false;
    },
  },
};
</script>
<style lang="scss"></style>
