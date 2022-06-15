<template>
  <div style="background: #d54a37">
    <template v-if="!userAddress">
      <div
        class="flex min-w-full relative min-h-screen text-black relative items-center justify-center p-3"
      >
        <template v-if="!connecting">
          <p class="absolute top-0 left-0 text-3xl md:text-5xl p-3">
            Connect wallet<br />
            to continue
          </p>
          <div>
            <button
              @click="connect"
              class="flex items-center px-6 py-4 text-2xl md:text-3xl ml-3 text-lg hover:bg-black hover:text-black border-2 border-black rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7 mr-2"
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
              Click to Connect
            </button>
          </div>
          <img
            class="absolute right-3 bottom-3"
            style="width: 30vw"
            src="Salon_Logotype_RGB_Positive.svg"
          />
        </template>

        <template v-if="connecting">
          <p class="text-2xl md:text-3xl"><GlobalLoader /></p>
        </template>
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
import GlobalLoader from "@/components/GlobalLoader.vue";
export default {
  name: "DappHome",
  components: { DappHeader, GlobalLoader },
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
