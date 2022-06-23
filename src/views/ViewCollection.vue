<template>
  <AppShell :colors="colors" :isLoaded="loaded">
    <div class="grid grid-cols-12 gap-3 w-full px-3 pt-32">
      <div
        class="col-span-6 sm:col-span-4 lg:col-span-3"
        v-for="(item, index) in collection"
        :key="index"
      >
        <div class="bg-black text-black h-64">
          {{ item.fields.title["en-US"] }}
        </div>
      </div>
      <div
        class="col-span-6 sm:col-span-6 lg:col-span-4 bg-black text-black h-64"
        v-for="(item, index) in collection"
        :key="index"
      >
        <div class="bg-black text-black h-64">
          {{ item.fields.title["en-US"] }}
        </div>
      </div>
      <div
        class="col-span-6 sm:col-span-6 lg:col-span-4 bg-black text-black h-64"
        v-for="(item, index) in collection"
        :key="index"
      >
        <div class="bg-black text-black h-64">
          {{ item.fields.title["en-US"] }}
        </div>
      </div>
    </div>
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
