<template>
  <AppShell :isLoaded="loaded" :protected="false" class="pb-64">
    <div v-if="loaded" class="grid grid-cols-12 pt-20 w-full font-haffer px-5">
      <div class="col-span-12 md:col-span-9 xl:col-span-7 text-2xl">
        <p class="mb-8" v-html="data.fields.title"></p>
        <div v-html="data.fields.code"></div>
        <div v-html="data.fields.code2"></div>
      </div>
    </div>
    <div class="lg:col-span-4"></div>
  </AppShell>
</template>
<script>
// @ is an alias to /src
import axios from "axios";
import AppShell from "@/components/AppShell";

export default {
  components: { AppShell },
  data() {
    return {
      data: {},
      loaded: false,
    };
  },
  async mounted() {
    try {
      const res = await axios.get(
        process.env.VUE_APP_URI + "/entry/HlkDGtPc9H5T6Eaxu51hI?cache=true"
      );
      this.data = res.data;
      this.loaded = true;
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
