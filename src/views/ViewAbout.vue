<template>
  <div
    class="bg-black min-h-screen text-white relative"
    v-if="'fields' in content"
  >
    <AppHeader :colors="colors"></AppHeader>
    <div class="grid grid-cols-12 px-3">
      <div
        class="col-span-12 col-start-1 sm:col-span-10 sm:col-start-2 lg:col-span-8 lg:col-start-3"
      >
        <p
          v-for="(item, index) in content.fields.content['en-US'].content"
          :key="index"
          class="app-text mb-8"
        >
          {{ item.content[0].value }}
        </p>
      </div>
    </div>

    <AppFooter :colors="colors" />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
export default {
  name: "AboutView",
  components: { AppHeader, AppFooter },
  data() {
    return {
      colors: ["black", "white"],
      content: {},
    };
  },
  async beforeMount() {
    console.log("members load!");
    try {
      const res = await axios.get(
        "https://salontest-terrifickid.cloud.okteto.net/entry/7fXKpXp8oIZgrvDdfk4Dd0"
      );
      this.content = res.data;
    } catch (error) {
      console.log("error", error);
    }
  },
};
</script>
<style>
body,
html {
  @apply bg-black;
}
</style>
