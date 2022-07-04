<template>
  <div>
    <div v-show="!ready"></div>
    <div v-show="ready">
      <AppHeader :colors="colors" />
      <router-view />
      <AppFooter :colors="colors" />
    </div>
  </div>
</template>
<script>
import AppHeader from "@/components/AppHeaderBurger";
import AppFooter from "@/components/AppFooter";
export default {
  data() {
    return {
      colors: ["white", "black"],
      fontsLoaded: false,
    };
  },
  components: { AppHeader, AppFooter },
  computed: {
    ready() {
      return true;
    },
  },
  beforeMount() {
    window.addEventListener("resize", function () {
      alert("resize!");
    });
  },
};
</script>
<style lang="scss">
.router-link-active button {
  background-color: black !important;
  color: white !important;
}
</style>
