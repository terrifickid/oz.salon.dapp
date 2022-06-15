<template>
  <div
    class="bg-black min-h-screen min-w-screen flex items-center justify-center relative"
  >
    <div style="min-height: 25rem" class="flex items-center justify-center">
      <div class="text-center" style="padding: 0 20vw">
        <img src="metal_logo_op.jpg" />
      </div>
    </div>

    <div class="bottom-0 absolute p-3">
      <a href="/#/app/" class="text-white text-2xl md:text-3xl">Join</a>
    </div>

    <div class="top-0 left-0 absolute p-3">
      <a href="/#/collection" class="text-white text-2xl md:text-3xl"
        >Collection</a
      >
    </div>

    <div class="top-0 right-0 absolute p-3">
      <a href="/#/about" class="text-white text-2xl md:text-3xl">About</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>
