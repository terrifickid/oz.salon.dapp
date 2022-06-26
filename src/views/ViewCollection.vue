<template>
  <AppShell :colors="colors" :isLoaded="loaded" class="font-haffer">
    <div
      class="pt-24 text-center w-full absolute z-40 keyboard-off font-haffer"
    >
      <select class="text-right alpha p-2 font-bold">
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
        <option>E</option>
        <option>F</option>
        <option>G</option>
        <option>H</option>
        <option>I</option>
        <option>J</option>
        <option>K</option>
        <option>L</option>
        <option>M</option>
        <option>N</option>
        <option>O</option>
        <option>P</option>
        <option>Q</option>
        <option>R</option>
        <option>S</option>
        <option>T</option>
        <option>U</option>
        <option>V</option>
        <option>W</option>
        <option>X</option>
        <option>Y</option>
        <option>Z</option>
      </select>
      <select class="text-right p-2 font-bold">
        <option v-for="(c, index) in collection" :key="index">
          {{ c.fields.title["en-US"] }}
        </option>
      </select>
      <select class="text-right p-2 font-bold">
        <option>Price</option>
        <option>Date</option>
      </select>
    </div>
    <AppFullpage v-if="collection.length">
      <div v-for="(item, index) in collection" :key="index" class="section">
        <div class="grid grid-cols-12 w-full gap-3 px-3" style="height: 50vh">
          <div
            class="col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-2 text-sm"
          >
            <div class="pr-4">
              <p class="pb-4">{{ item.fields.title["en-US"] }}</p>
              <p>{{ item.fields.artist["en-US"] }}</p>

              <p class="pb-2">{{ item.fields.year["en-US"] }}</p>
              <p>{{ item.fields.description["en-US"] }}</p>
            </div>
          </div>
          <div class="col-span-6 sm:col-span-8 lg:col-span-9 xl:col-span-10">
            <div style="height: 50vh; overflow: scroll">
              <div style="height: 50vh; width: 100rem">
                <ImageAsset
                  v-for="(image, i) in item.fields.images['en-US']"
                  :key="i"
                  :image="image"
                  class="inline-block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppFullpage>
  </AppShell>
</template>
<script>
// @ is an alias to /src
import axios from "axios";
import AppShell from "@/components/AppShell";
import AppFullpage from "@/components/AppFullpage";
import ImageAsset from "@/components/ImageAsset";
export default {
  name: "CollectionView",
  components: { AppFullpage, AppShell, ImageAsset },
  data() {
    return {
      colors: ["white", "black"],
      collection: [],
    };
  },
  computed: {
    loaded() {
      return this.collection.length;
    },
  },
  async beforeMount() {
    console.log("collection load!");
    try {
      const res = await axios.get(
        "https://salontest-terrifickid.cloud.okteto.net/collection"
      );
      this.collection = res.data;
      console.log(this.collection);
    } catch (error) {
      console.log("error", error);
    }
  },
};
</script>
<style scoped>
select {
  border: 0px;
  outline: 0px;
}
</style>
