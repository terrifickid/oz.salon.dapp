<template>
  <div class="container-fluid mx-auto">
    <div
      class="grid grid-cols-12 flex items-center bg-black px-10 z-10 relative"
    >
      <div class="col-span-6">
        <a href="/#/" class="flex text-white items-center justify-left py-3"
          ><span>EXIT</span></a
        >
      </div>

      <div class="col-span-6 flex justify-end text-white overflow-hidden">
        <button @click="connect" v-show="!userAddress" class="px-4 p-3">
          <span>Connect</span>
        </button>
        <button @click="disconnect" v-show="userAddress" class="px-4 p-3">
          <span v-show="userAddress">{{ userAddress }}</span>
        </button>
      </div>
    </div>
    <template v-if="!userAddress">
      <div
        class="absolute top-0 left-0 min-h-screen min-w-full flex items-center justify-center"
      >
        <div class="text-center" v-if="!connecting">
          <h1 class="text-4xl font-extrabold">
            <a href="/"
              ><img
                class="w-10 mx-auto mb-5"
                src="Salon_Symbol_RGB_Positive.svg"
            /></a>
          </h1>
          <p class="text-3xl">Connect wallet to continue.</p>
          <button
            @click="connect"
            class="btn px-4 py-3 mt-4 text-lg hover:bg-black hover:text-white border rounded"
          >
            Connect
          </button>
        </div>
        <div class="text-center" v-if="connecting">
          <p class="text-3xl">Connecting...</p>
        </div>
      </div>
    </template>
    <template v-if="userAddress">
      <div class="grid grid-cols-12 px-10">
        <div class="col-span-12 md:col-span-3 py-10">
          <DappHeader></DappHeader>
        </div>
        <div class="col-span-12 md:col-span-8 py-10">
          <slot></slot>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import DappHeader from "@/components/DappHeader.vue";
export default {
  name: "DappHome",
  components: { DappHeader },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    userAddress() {
      if ("walletAddress" in this.profile)
        return this.profile.walletAddress["en-US"];
      return false;
    },
    connecting() {
      return this.$store.state.connecting;
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
};
</script>
