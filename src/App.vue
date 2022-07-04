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
  },
  methods: {
    hideUI() {
      if (window.innerHeight < 500) this.$store.commit("hideUI");
      if (window.innerHeight > 500) this.$store.commit("showUI");
    },
  },
  beforeMount() {
    window.addEventListener("resize", this.hideUI);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.hideUI);
  },
};
</script>
<style lang="scss">
.router-link-active button {
  background-color: black !important;
  color: white !important;
}
</style>
