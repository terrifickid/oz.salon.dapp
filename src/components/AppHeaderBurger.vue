<template>
  <div
    v-show="ui"
    class="px-3 pt-3 fixed w-screen overflow-hidden z-50 transition-all font-haffer"
    :class="{
      'h-screen bg-black text-white': toggle,
      'h-12 bg-white text-black': !toggle,
    }"
  >
    <button @click="toggler" class="relative z-20">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 8h16M4 16h16"
        />
      </svg>
    </button>

    <ul class="text-xl pb-16 pt-16 fixed bottom-0" v-show="toggle">
      <a href="/#/">
        <router-link to="/" @click="toggleDown()">
          <li :colors="colors">Home</li>
        </router-link>
      </a>
      <a href="/#/about">
        <router-link to="/about" @click="toggleDown()">
          <li :colors="colors">About</li></router-link
        >
      </a>
      <a href="/#/collection">
        <router-link to="/collection" @click="toggleDown()">
          <li :colors="colors" class="mb-2">Collection</li>
        </router-link>
      </a>
      <a href="/#/invest">
        <router-link to="/invest" @click="toggleDown()">
          <li :colors="colors">Invest</li>
        </router-link>
      </a>
      <a href="/#/transfer">
        <router-link to="/transfer" @click="toggleDown()">
          <li :colors="colors">Transfer</li>
        </router-link>
      </a>
      <a href="/#/treasury">
        <router-link to="/treasury" @click="toggleDown()">
          <li :colors="colors" class="mb-2">Treasury</li>
        </router-link>
      </a>
      <a href="/#/propose">
        <router-link to="/propose" @click="toggleDown()">
          <li :colors="colors">Propose</li>
        </router-link>
      </a>
      <a href="/#/collect">
        <router-link to="/collect" @click="toggleDown()">
          <li :colors="colors">Collect</li>
        </router-link>
      </a>
      <a href="/#/sell">
        <router-link to="/sell" @click="toggleDown()">
          <li :colors="colors" class="mb-2">Sell</li>
        </router-link>
      </a>
      <a href="/#/members">
        <router-link to="/members" @click="toggleDown()">
          <li :colors="colors" class="mr-2">Members</li>
        </router-link>
      </a>
      <a href="/#/profile">
        <router-link to="/profile" @click="toggleDown()">
          <li :colors="colors" class="mr-2">Profile</li>
        </router-link>
      </a>
      <a href="/#/join">
        <router-link v-if="!isMember" to="/governance" @click="toggleDown()">
          <li :colors="colors" class="mr-2">Join</li>
        </router-link>
      </a>
      <a href="/#/governance">
        <router-link v-if="isMember" to="/governance" @click="toggleDown()">
          <li :colors="colors" class="mr-2 mb-2">Governance</li>
        </router-link>
      </a>

      <a href="/#/kick" v-if="isAdmin">
        <router-link to="/kick" @click="toggleDown()">
          <li :colors="colors" class="mr-2 mb-2">Kick</li>
        </router-link>
      </a>
    </ul>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  components: {},
  props: ["colors"],
  data() {
    return {
      toggle: false,
    };
  },
  computed: {
    display() {
      return this.colors?.length;
    },
    walletAddress() {
      return this.$store.state.walletAddress;
    },
    profile() {
      return this.$store.state.profile;
    },
    isMember() {
      if ("units" in this.profile) {
        return this.profile.units;
      }
      return false;
    },
    isAdmin() {
      var role = _.get(this.profile, "role");
      if (role == "Admin") return true;
      return false;
    },
    ui() {
      return this.$store.state.ui;
    },
  },

  methods: {
    toggler() {
      this.toggle = !this.toggle;
    },
    toggleDown() {
      this.toggle = false;
    },
    connect() {
      this.$store.dispatch("connect");
    },
    disconnect() {
      this.$store.dispatch("disconnect");
    },
  },
};
</script>
<style scoped>
.router-link-active {
  @apply font-bold;
}
</style>
