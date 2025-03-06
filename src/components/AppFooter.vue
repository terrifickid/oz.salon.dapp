<template>
  <div class="fixed overflow-hidden left-0 right-0 bottom-0 p-5 z-50">
    <div class="grid grid-cols-12">
      <div class="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2">
        <a href="/#/" class="opacity-100"
          ><img src="Salon_Logotype_RGB_Negative.svg"
        /></a>
      </div>
      <div
        id="links"
        class="hidden md:flex col-span-8 sm:col-span-9 lg:col-span-10 flex items-end justify-end"
      >
        <router-link v-if="!isMember" class="ml-5" to="/members"
          >Members</router-link
        >
        <router-link class="ml-5" to="/mission">Mission</router-link>
        <router-link class="ml-5" to="/faq">FAQ</router-link>
        <router-link class="ml-5" to="/contact">Contact</router-link>
        <router-link v-if="isMember" class="ml-5" to="/resources"
          >Resources</router-link
        >
        <router-link v-if="!isMember" class="ml-5" to="/manage/start"
          >Apply</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import _ from "lodash";
export default {
  props: ["colors"],
  components: {},
  computed: {
    login() {
      return this.$store.state.login;
    },
    profile() {
      return this.$store.state.profile;
    },
    isMember() {
      return _.get(this, "login");
    },
    isAdmin() {
      var role = _.get(this.profile, "role");
      if (role == "Admin") return true;
      return false;
    },
  },
};
</script>
<style scoped>
#links a {
  @apply opacity-50;
}
#links a.router-link-active {
  @apply opacity-100;
}
</style>
