<template>
  <div
    class="pt-3 px-3 fixed w-screen overflow-scroll bg-white z-50 no-scrollbar transition-all font-haffer"
    :class="{ 'h-screen': toggle, 'h-12': !toggle }"
  >
    <div style="width: 200rem">
      <button @click="toggler">
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

      <ul class="text-lg font-light pb-16 pt-16">
        <router-link to="/" @click="toggleDown()">
          <li :colors="colors" class="mr-2">Home</li>
        </router-link>

        <router-link to="/about" @click="toggleDown()">
          <li :colors="colors" class="mr-2">About</li></router-link
        >
        <router-link to="/collection" @click="toggleDown()">
          <li :colors="colors" class="mr-2">Collection</li>
        </router-link>
        <router-link to="/invest" @click="toggleDown()">
          <li :colors="colors" class="mr-2">Invest</li>
        </router-link>
        <router-link to="/transfer" @click="toggleDown()">
          <li :colors="colors" class="mr-2">Transfer</li>
        </router-link>
        <router-link to="/treasury" @click="toggleDown()">
          <li :colors="colors" class="mr-2">Treasury</li>
        </router-link>
        <router-link to="/propose" @click="toggleDown()">
          <li :colors="colors" class="mr-2">Propose</li>
        </router-link>
        <router-link to="/collect" @click="toggleDown()">
          <li :colors="colors" class="mr-2">Collect</li>
        </router-link>
        <router-link to="/sell" @click="toggleDown()">
          <li :colors="colors" class="mr-2">Sell</li>
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
