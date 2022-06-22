<template>
  <div
    v-if="display"
    class="fixed left-0 right-0 top-0 z-50 h-12 text-xl"
    :class="{
      ['bg-' + colors[0]]: true,
      ['text-' + colors[1]]: !toggle,
      ['text-' + colors[0]]: toggle,
    }"
  >
    <button
      @click="toggle = !toggle"
      class="items-center p-3 pointer absolute z-30"
    >
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
    <div
      :class="{ 'h-0': !toggle, 'h-screen': toggle }"
      class="fixed top-0 z-20 min-w-full bg-black text-white transition-all overflow-hidden"
    >
      <div class="grid grid-cols-12 flex min-h-screen">
        <div class="col-span-8 self-center flex justify-center"></div>
        <div class="col-span-12 self-end">
          <ul class="pb-4 px-3">
            <li><a @click="toggleDown" href="/#">Home</a></li>
            <li><a @click="toggleDown" href="/#/about">About</a></li>
            <li><a @click="toggleDown" href="/#/collection">Collection</a></li>
          </ul>
          <ul class="pb-4 px-3">
            <li><a @click="toggleDown" href="/#/invest">Invest</a></li>
            <li><a @click="toggleDown" href="/#/transfer">Transfer</a></li>
            <li><a @click="toggleDown" href="/#/treasury">Treasury</a></li>
          </ul>
          <ul class="pb-4 px-3">
            <li><a @click="toggleDown" href="/#/propose">Propose</a></li>
            <li><a @click="toggleDown" href="/#/collection">Collect</a></li>
            <li><a @click="toggleDown" href="/#/sell">Sell</a></li>
          </ul>
          <ul class="pb-8 px-3">
            <li><a @click="toggleDown" href="/#/members">Members</a></li>
            <li><a @click="toggleDown" href="/#/profile">Profile</a></li>
            <li><a @click="toggleDown" href="/#/join">Join</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
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
  components: {},
};
</script>
