<template>
  <AppShell :colors="colors" :isLoaded="loaded">
    <AppContent class="items-start justify-center">
      <div class="pt-24 text-center w-full">
        <select class="text-right alpha">
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
        <select class="text-right p-2">
          <option v-for="(c, index) in collection" :key="index">
            {{ c.fields.title["en-US"] }}
          </option>
        </select>
        <select class="text-right p-2">
          <option>Price</option>
          <option>Date</option>
        </select>
      </div>
    </AppContent>
  </AppShell>
</template>
<script>
// @ is an alias to /src
import axios from "axios";
import AppShell from "@/components/AppShell";
export default {
  name: "CollectionView",
  components: { AppShell },
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
