<template>
  <div class="p-3 bg-black min-h-screen text-white">
    <GlobalHeader></GlobalHeader>
    <div class="grid grid-cols-12">
      <div class="col-span-11">
        <p class="text-2xl md:text-3xl font-normal" style="text-indent: 15vw">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p class="text-2xl md:text-3xl font-normal" style="text-indent: 15vw">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalHeader from "@/components/GlobalHeader";
export default {
  name: "CollectionView",
  components: { GlobalHeader },
};
</script>
