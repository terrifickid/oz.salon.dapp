<template>
  <div class="pb-48">
    <div v-show="!ready" class="loat"></div>
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
    if (localStorage.getItem("salon_login")) this.$store.dispatch("connect");
    window.addEventListener("resize", this.hideUI);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.hideUI);
  },
  mounted() {
    console.log("APP", process.env);
  },
};
</script>
<style lang="scss"></style>
