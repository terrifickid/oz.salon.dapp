<template>
  <div
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
      <router-link to="/" @click="toggleDown()">
        <li :colors="colors">Home</li>
      </router-link>

      <router-link to="/about" @click="toggleDown()">
        <li :colors="colors">About</li></router-link
      >
      <router-link to="/collection" @click="toggleDown()">
        <li :colors="colors" class="mb-2">Collection</li>
      </router-link>

      <router-link to="/invest" @click="toggleDown()">
        <li :colors="colors">Invest</li>
      </router-link>
      <router-link to="/transfer" @click="toggleDown()">
        <li :colors="colors">Transfer</li>
      </router-link>
      <router-link to="/treasury" @click="toggleDown()">
        <li :colors="colors" class="mb-2">Treasury</li>
      </router-link>
      <router-link to="/propose" @click="toggleDown()">
        <li :colors="colors">Propose</li>
      </router-link>
      <router-link to="/collect" @click="toggleDown()">
        <li :colors="colors">Collect</li>
      </router-link>
      <router-link to="/sell" @click="toggleDown()">
        <li :colors="colors" class="mb-2">Sell</li>
      </router-link>
      <router-link to="/members" @click="toggleDown()">
        <li :colors="colors" class="mr-2">Members</li>
      </router-link>
      <router-link to="/profile" @click="toggleDown()">
        <li :colors="colors" class="mr-2">Profile</li>
      </router-link>
      <router-link to="/join" @click="toggleDown()">
        <li :colors="colors" class="mr-2">Join</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
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
