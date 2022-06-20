<template>
  <div
    class="fixed left-0 right-0 top-0 bg-black app-text z-50 h-12"
    :class="{
      'text-black': toggle,
      [backgroundClass]: true,
      [textClass]: !toggle,
    }"
  >
    <button
      @click="toggle = !toggle"
      class="items-center p-3 z-30 pointer absolute"
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
      class="fixed top-0 z-20 min-w-full bg-electric text-pink transition-all overflow-hidden"
    >
      <div class="grid grid-cols-12 flex min-h-screen">
        <div class="col-span-8 self-center flex justify-center"></div>
        <div class="col-span-12 text-4xl text-light self-end">
          <ul class="pb-16 px-3">
            <li v-if="!walletAddress">
              <button @click="connect" class="font-light">Connect</button>
            </li>
            <li v-if="walletAddress">{{ walletAddress }}</li>
            <li v-if="walletAddress">
              <a class="cursor-pointer flex items-center" @click="disconnect"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
                Disconnect</a
              >
            </li>
            <li class="mt-3">
              <a href="/#">Home</a>
              <ul class="mb-3">
                <li><a href="/#/collection">Collection</a></li>
                <li><a href="/#/about">About</a></li>
              </ul>
            </li>
            <li class="mt-3">
              <a href="/#/join">Join</a>
              <ul class="mb-3">
                <li><a href="/#/governance">Governance</a></li>
                <li><a href="/#/members">Members</a></li>
                <li><a href="/#/profile">Profile</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  props: ["backgroundClass", "textClass"],
  data() {
    return {
      toggle: false,
    };
  },
  computed: {
    walletAddress() {
      return this.$store.state.walletAddress;
    },
  },
  methods: {
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
