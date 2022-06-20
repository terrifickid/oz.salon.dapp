<template>
  <div
    class="bg-black min-h-screen min-w-screen flex items-center justify-center relative px-3"
  >
    <GlobalHeader
      :hide="true"
      class="absolute top-3 left-3 right-3"
    ></GlobalHeader>
    <div style="min-height: 25rem" class="flex items-center justify-center">
      <div class="text-center" style="padding: 0 20vw">
        <img src="metal_logo_op.jpg" />
      </div>
    </div>

    <div class="bottom-0 absolute p-3">
      <a href="/#/join" class="text-white text-2xl md:text-3xl">Join</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalHeader from "@/components/GlobalHeader";
export default {
  name: "HomeView",
  components: { GlobalHeader },
};
</script>
