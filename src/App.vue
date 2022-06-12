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
    var loading = setInterval(async () => {
      if (document.fonts.check("1rem Haffer XH")) {
        this.fontsLoaded = true;
        clearInterval(loading);
        console.log("Fonts Loaded!");
      }
    }, 10);
    this.$store.dispatch("init");
    window.ethereum.on("accountsChanged", () => {
      this.$store.dispatch("connect");
    });
  },
  computed: {
    members() {
      return this.$store.state.members;
    },
    ready() {
      if (this.fontsLoaded == true && this.members.length) return true;
      return false;
    },
  },
};
</script>
<style lang="scss"></style>
