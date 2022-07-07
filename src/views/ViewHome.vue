<template>
  <div>
    <div class="min-h-screen flex items-center">
      <div class="px-3 grid grid-cols-12 w-screen">
        <div
          class="col-span-10 col-start-2 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4"
        >
          <img src="Salon_Logotype_RGB_3D.jpg" />
        </div>
      </div>
      <div class="bottom-0 right-0 fixed p-3">
        <a href="/#/governance" v-if="!walletAddress">
          <AppButton :colors="colors" class="flex items-center"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-1 -ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            Connect</AppButton
          ></a
        ><a v-else
          ><AppButton
            :colors="colors"
            class="flex items-center"
            style="
              background: white !important;
              color: black !important;
              cursor: auto !important;
            "
            >Connected</AppButton
          ></a
        >
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import AppButton from "@/components/AppButton";

export default {
  name: "HomeView",
  components: { AppButton },
  data() {
    return {
      colors: ["white", "black"],
    };
  },
  computed: {
    walletAddress() {
      return this.$store.state.walletAddress;
    },
  },
  methods: {
    async disconnect() {
      await this.$store.dispatch("disconnect");
    },
  },
};
</script>
