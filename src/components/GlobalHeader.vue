<template>
  <div class="text-white grid grid-cols-12 flex items-center mb-8">
    <div class="col-span-4 text-left text-2xl md:text-3xl">
      <a href="/#/collection">Collection</a>
    </div>
    <div class="col-span-4 text-center">
      <a href="/#" :class="{ invisible: hide }">
        <img
          class="img-fluid mx-auto h-12"
          src="Salon_Logotype_RGB_Negative.svg"
      /></a>
    </div>
    <div class="col-span-4 text-right text-2xl md:text-3xl">
      <a href="/#/about">About</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  props: ["hide"],
  name: "GlobalHeader",
  components: {},
};
</script>
