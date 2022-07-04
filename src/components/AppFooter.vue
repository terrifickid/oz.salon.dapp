<template>
  <div
    class="fixed overflow-hidden left-0 right-0 bottom-0 p-3 z-10"
    :class="{ ['bg-' + colors[0]]: true }"
  >
    <div class="grid grid-cols-10">
      <div
        class="col-start-7 col-span-4 sm:col-start-8 sm:col-span-3 lg:col-start-9 lg:col-span-2"
      >
        <a href="/#/"> <img src="Salon_Logotype_RGB_3D.jpg" /></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["colors"],
  components: {},
};
</script>
