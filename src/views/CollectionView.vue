<template>
  <div class="p-3 bg-black min-h-screen text-white relative">
    <GlobalHeader :hide="false"></GlobalHeader>
    <div class="grid grid-cols-12">
      <div class="col-span-12 sm:col-span-11 md:col-span-11">
        <div class="grid grid-cols-12 gap-3">
          <div
            class="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 bg-white text-black"
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
