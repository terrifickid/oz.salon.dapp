<template>
  <div>
    <div class="min-h-screen flex items-center">
      <div class="px-3 grid grid-cols-12 w-screen">
        <div class="app-frame">
          <img src="Salon_Logotype_RGB_3D.jpg" />
          <p
            class="text-xs mx-4 mt-3 mr-10 sm:text-sm sm:mr-32 sm:mt-5 sm:ml-5 font-mono"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div class="bottom-0 right-0 absolute p-3">
        <router-link to="/join">
          <AppButton :colors="colors" class="flex items-center"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-1"
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
            Join</AppButton
          ></router-link
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
};
</script>
