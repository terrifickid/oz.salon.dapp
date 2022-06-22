<template>
  <div>
    <AppHeader :colors="colors" />
    <div class="min-h-screen flex items-center">
      <div class="px-3 grid grid-cols-12 w-screen">
        <div
          class="col-span-10 col-start-2 sm:col-span-8 sm:col-start-3 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4"
        >
          <img src="Salon_Logotype_RGB_3D.jpg" />
        </div>
      </div>
      <div class="bottom-0 right-0 absolute p-3">
        <AppButton href="/#/join" class="text-2xl" :colors="colors"
          >Join</AppButton
        >
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from "@/components/AppHeader";
import AppButton from "@/components/AppButton";

export default {
  name: "HomeView",
  components: { AppHeader, AppButton },
  data() {
    return {
      colors: ["white", "black"],
    };
  },
};
</script>
