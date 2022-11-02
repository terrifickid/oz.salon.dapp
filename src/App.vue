<template>
  <div>
    <div v-show="!ready"></div>
    <div v-show="ready">
      <AppHeader :colors="colors" />
      <router-view />
    </div>
  </div>
</template>
<script>
import AppHeader from "@/components/AppHeaderBurger";

export default {
  data() {
    return {
      colors: ["white", "black"],
      fontsLoaded: false,
    };
  },
  components: { AppHeader },
  computed: {
    ready() {
      return true;
    },
    isMobile() {
      alert(navigator.userAgent);
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
    hideUI() {
      if (window.innerHeight < 500) this.$store.commit("hideUI");
      if (window.innerHeight > 500) this.$store.commit("showUI");
    },
  },
  beforeMount() {
    if (localStorage.getItem("salon_login")) this.$store.dispatch("connect");
    window.addEventListener("resize", this.hideUI);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.hideUI);
  },
  mounted() {
    console.log("Mobile Check!", this.isMobile);
  },
};
</script>
<style lang="scss"></style>
