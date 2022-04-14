<template>
  <div
    style="
      background: url('Logo.png') center center no-repeat;
      background-size: cover;
    "
    class="bg-black w-screen h-screen flex items-center justify-center"
  >
    <div class="text-center">
      <h1 class="text-6xl mb-12 font-extrabold">SalonDAO</h1>
      <p class="text-3xl mb-20">
        The art world's DAO.<br />Collecting contemporary art together.
      </p>
      <a
        href="https://app.salondao.xyz"
        class="border-2 p-5 bg-black text-white text-2xl rounded-full border-black"
        >Enter App</a
      >
      <a
        href="http://docs.salondao.xyz"
        class="border-2 p-5 bg-black text-white text-2xl rounded-full border-black"
        >Docs</a
      >
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
