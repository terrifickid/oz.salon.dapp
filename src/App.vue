<template>
  <div>
    <div v-show="!ready"></div>
    <div v-show="ready">
      <AppHeader :colors="colors" class="keyboard-off" />
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
