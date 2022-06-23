<template>
  <div>
    <div class="min-h-screen flex items-center">
      <div class="px-3 grid grid-cols-12 w-screen">
        <div class="app-frame">
          <img src="Salon_Logotype_RGB_3D.jpg" />
        </div>
      </div>
      <div class="bottom-0 right-0 absolute p-3">
        <AppButton href="/#/join" :colors="colors" class="flex item-center"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
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
          Join</AppButton
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
