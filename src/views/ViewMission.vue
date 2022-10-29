<template>
  <AppShell
    :colors="colors"
    :isLoaded="loaded"
    :protected="false"
    class="pb-64"
  >
    <div v-if="loaded" class="grid grid-cols-12 pt-20 w-full font-haffer px-5">
      <div class="col-span-12 md:col-span-6">
        <p class="text-2xl mb-8" v-html="data.fields.title"></p>
        <div v-html="data.fields.code"></div>
      </div>
      <div class="hidden md:block md:col-span-3"></div>
      <div class="hidden md:block md:col-span-3">
        <p class="pb-8">Contact</p>
        <p class="opacity-50 pb-4">Jordan Huelskamp<br /><i>Founder</i></p>
        <p class="opacity-50">hello@salondao.xyz</p>
      </div>
    </div>
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
        process.env.VUE_APP_URI + "/entry/5Fzu95Zbg2X9r0Ke6RKwFo"
      );
      this.data = res.data;
      this.loaded = true;
      console.log(process.env.VUE_APP_URI, "datatk", this.data);
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
