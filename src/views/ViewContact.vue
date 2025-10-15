<template>
  <AppShell :isLoaded="loaded" :protected="false">
    <div
      v-if="loaded"
      class="grid grid-cols-12 pt-20 w-full font-haffer px-5 pb-48 gap-4"
    >
      <div class="col-span-12 md:col-span-6 text-2xl grid grid-cols-12">
        <p class="mb-8 col-span-12" v-html="data.fields.title"></p>
        <div class="col-span-12" v-html="data.fields.code"></div>
        <div class="col-span-12 xl:col-span-6" v-html="data.fields.code2"></div>
        <div class="col-span-12 xl:col-span-6">
          <div v-html="data.fields.code3"></div>
          <ContactForm />
        </div>
      </div>

      <!-- Change col-start-3 to col-start-9 to move form to the right -->
      <div class="col-span-12 md:col-span-4 md:col-start-9"></div>
    </div>
  </AppShell>
</template>
<script>
import axios from "axios";
import AppShell from "@/components/AppShell";
import ContactForm from "@/components/ContactForm";
export default {
  components: { AppShell, ContactForm },
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
