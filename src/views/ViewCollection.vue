<template>
  <AppShell :colors="colors" :isLoaded="loaded">
    <AppContent>
      <div
        class="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 bg-white text-black"
        style="height: 25rem"
        v-for="(item, index) in collection"
        :key="index"
      >
        {{ item.fields.title["en-US"] }}
      </div>
    </AppContent>
  </AppShell>
</template>
<script>
// @ is an alias to /src
import axios from "axios";
import AppShell from "@/components/AppShell";
import AppContent from "@/components/AppContent";
export default {
  name: "CollectionView",
  components: { AppShell, AppContent },
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
    } catch (error) {
      console.log("error", error);
    }
  },
};
</script>
