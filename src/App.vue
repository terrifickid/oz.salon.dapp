<template>
  <div>
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
    login() {
      return this.$store.state.login;
    },
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
    //var l = localStorage.getItem("salon_login");
    // if (l) {
    //console.log("l ist", l);
    //this.$store.dispatch("connect", JSON.parse(l));
    //}
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.hideUI);
  },
  async mounted() {
    console.log("APP", process.env, this.login);
    if (this.login) await this.$store.dispatch("connect", this.login);
  },
};
</script>
<style lang="scss"></style>
