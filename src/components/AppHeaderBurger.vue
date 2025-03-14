<template>
  <div
    class="px-5 py-4 fixed w-screen overflow-hidden z-40 font-haffer"
    :class="{
      'h-screen bg-owhite text-black': toggle,
      'bg-white text-black': !toggle,
    }"
  >
    <div class="hidden md:block text-right text-2xl links">
      <router-link class="inline-block ml-4" to="/collection"
        >Our Collection</router-link
      >
      <router-link
        v-if="isMember"
        class="inline-block ml-5 manage"
        to="/manage/start"
        :class="{ routy: isChildRoute }"
        >Manage</router-link
      >
      <router-link
        v-if="isMember"
        class="inline-block ml-5"
        to="/manage/profile"
        >Account</router-link
      >
      <router-link v-if="!login" class="inline-block ml-5" to="/manage/start"
        >Login</router-link
      >
      <a
        v-if="login"
        class="inline-block ml-5"
        @click="disconnect"
        href="/#/manage/start"
        >Logout</a
      >
    </div>
    <div class="grid flex grid-cols-12 items-center w-full">
      <div class="md:hidden justify-self-start col-span-6">{{ pageTitle }}</div>
      <div class="md:hidden col-span-6">
        <button @click="toggler" class="float-right">
          <svg
            v-if="!toggle"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 8h16M4 16h16"
            />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="text-xl pb-16 pt-16 fixed top-0 text-3xl" v-show="toggle">
      <div class="pb-10">
        <router-link @click="toggleDown()" class="block" to="/collection"
          >Our Collection</router-link
        >
        <router-link
          v-if="!isMember"
          @click="toggleDown()"
          class="block"
          to="/manage/start"
          >Login</router-link
        >

        <router-link
          v-if="isMember"
          @click="toggleDown()"
          class="relative manage"
          to="/manage/start"
          >Manage</router-link
        >
        <router-link
          v-if="isMember"
          @click="toggleDown()"
          class="block"
          to="/manage/profile"
          >Account</router-link
        >
        <router-link
          v-if="login"
          @click="disconnect()"
          class="block"
          to="/manage/start"
          >Logout</router-link
        >
      </div>
      <div class="pb-10">
        <router-link
          v-if="!isMember"
          @click="toggleDown()"
          class="block"
          to="/members"
          >Members</router-link
        >
        <router-link @click="toggleDown()" class="block" to="/mission"
          >Mission</router-link
        >
        <router-link @click="toggleDown()" class="block" to="/faq"
          >FAQ</router-link
        >

        <router-link class="block" to="/contact" @click="toggleDown()"
          >Contact</router-link
        >
        <router-link
          v-if="isMember"
          class="block"
          to="/resources"
          @click="toggleDown()"
          >Resources</router-link
        >
        <router-link
          v-if="!isMember"
          class="block"
          to="/apply"
          @click="toggleDown()"
          >Apply</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  components: {},
  data() {
    return {
      toggle: false,
    };
  },
  computed: {
    isChildRoute() {
      var on = this.$route.path.includes("manage");
      var off = this.$route.path.includes("profile");
      if (off) return false;
      if (on) return true;
      return false;
    },
    login() {
      return this.$store.state.login;
    },
    walletAddress() {
      return this.$store.state.walletAddress;
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
    pageTitle() {
      var manage = ["start"];
      if (this.$route.name == "home") return "";
      var name = String(this.$route.name).toLowerCase();
      if (manage.includes(name)) return "Manage";
      return this.$route.name;
    },
  },

  methods: {
    toggler() {
      this.toggle = !this.toggle;
    },
    toggleDown() {
      this.toggle = false;
    },
    disconnect() {
      this.$store.dispatch("disconnect");
      this.toggleDown();
    },
  },
};
</script>
<style scoped>
.links a {
  @apply opacity-50 relative;
}
a.router-link-active,
a.routy {
  @apply opacity-100 relative;
}

.manage::after {
  content: "";
  @apply bg-green-500 absolute top-1 -right-2 w-2 h-2 rounded-full;
}
</style>
