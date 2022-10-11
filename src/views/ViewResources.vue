<template>
  <AppShell :isLoaded="loaded" :protected="true" class="pb-64">
    <div
      v-if="loaded"
      class="grid grid-cols-12 pt-20 gap-x-5 w-full font-haffer px-5"
      v-html="data.fields.code"
    ></div>
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
        process.env.VUE_APP_URI + "/entry/7GUZwMmLG8VerV6fptuUYX"
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
