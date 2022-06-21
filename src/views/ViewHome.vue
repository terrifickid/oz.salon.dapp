<template>
  <div class="min-h-screen flex items-center">
    <AppHeader :colors="colors" />
    <div class="px-3 grid grid-cols-12 w-screen">
      <div
        class="col-span-12 sm:col-span-10 sm:col-start-2 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4"
      >
        <img src="metal_logo_op.jpg" />
      </div>
    </div>
    <div class="bottom-0 right-0 absolute p-3">
      <AppButton href="/#/join" class="text-2xl" :colors="colors"
        >Join</AppButton
      >
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
      colors: ["black", "white"],
    };
  },
};
</script>
