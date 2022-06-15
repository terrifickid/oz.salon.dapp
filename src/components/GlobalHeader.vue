<template>
  <div class="text-white grid grid-cols-12 flex items-center mb-8">
    <div class="col-span-4 text-left text-2xl md:text-3xl">
      <a href="/#/collection">Collection</a>
    </div>
    <div class="col-span-4 text-center">
      <a href="/#" :class="{ invisible: hide }"
        ><AppLogo class="w-40 mx-auto" :color="'fill-white'"
      /></a>
    </div>
    <div class="col-span-4 text-right text-2xl md:text-3xl">
      <a href="/#/about">About</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppLogo from "@/components/AppLogo.vue";
export default {
  props: ["hide"],
  name: "GlobalHeader",
  components: { AppLogo },
};
</script>
