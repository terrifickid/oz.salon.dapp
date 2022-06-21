<template>
  <div class="fixed left-0 right-0 bottom-0 p-3 z-10" :class="backgroundClass">
    <div class="grid grid-cols-10">
      <div
        class="col-start-7 col-span-4 sm:col-start-8 sm:col-span-3 lg:col-start-9 lg:col-span-2"
      >
        <a href="/#/"><AppLogo :color="'fill-' + colors[1]" /></a>
      </div>
    </div>
  </div>
</template>
<script>
import AppLogo from "@/components/AppLogo.vue";
export default {
  props: ["colors"],
  components: {
    AppLogo,
  },
};
</script>
