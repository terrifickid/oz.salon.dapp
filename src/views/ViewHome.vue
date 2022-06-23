<template>
  <div>
    <div class="min-h-screen flex items-center">
      <div class="px-3 grid grid-cols-12 w-screen">
        <div class="app-frame">
          <img src="Salon_Logotype_RGB_3D.jpg" />
        </div>
      </div>
      <div class="bottom-0 right-0 absolute p-3">
        <AppButton href="/#/join" :colors="colors">Join</AppButton>
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
