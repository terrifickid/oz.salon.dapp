<template>
  <div class="p-3 bg-black min-h-screen text-white relative">
    <GlobalHeader :hide="false"></GlobalHeader>
    <div class="grid grid-cols-12">
      <div class="col-span-10">
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
        <div class="grid grid-cols-12 gap-3">
          <div
            class="col-span-6 md:col-span-4 xl:col-span-3 bg-white text-black"
            style="height: 25rem"
            v-for="(item, index) in collection"
            :key="index"
          >
            {{ item.fields.title["en-US"] }}
          </div>
        </div>
      </div>
    </div>
    <FaderShadow></FaderShadow>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import GlobalHeader from "@/components/GlobalHeader";
import FaderShadow from "@/components/FaderShadow";
export default {
  name: "CollectionView",
  components: { GlobalHeader, FaderShadow },
  data() {
    return {
      collection: [],
    };
  },
  async beforeMount() {
    console.log("collection load!");
    try {
      const res = await axios.get(
        "https://salontest-terrifickid.cloud.okteto.net/collection"
      );
      this.collection = res.data;
    } catch (error) {
      console.log("error", error);
    }
  },
};
</script>
