<template>
  <AppShell :colors="colors" :isLoaded="loaded">
    <div class="grid grid-cols-12 px-3 pt-10 pb-32 font-haffer">
      <div class="app-frame" v-if="'fields' in content">
        <p
          v-for="(item, index) in content.fields.content['en-US'].content"
          :key="index"
          class="mb-4"
          :class="getType(item.content[0].marks) + ' ' + item.nodeType"
        >
          {{ item.content[0].value }}
        </p>
      </div>
    </div>
  </AppShell>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import AppShell from "@/components/AppShell";

export default {
  name: "AboutView",
  components: { AppShell },
  data() {
    return {
      colors: ["white", "black"],
      content: {},
    };
  },
  methods: {
    getType(marks) {
      if (marks) {
        if (marks.length)
          return marks
            .map(function (item) {
              return item.type;
            })
            .toString();
      }
    },
  },
  computed: {
    loaded() {
      return this.content?.fields;
    },
  },
  async beforeMount() {
    console.log("Loading about...");
    try {
      const res = await axios.get(
        "https://salontest-terrifickid.cloud.okteto.net/entry/7fXKpXp8oIZgrvDdfk4Dd0"
      );
      this.content = res.data;
      console.log("about loaded!");
    } catch (error) {
      console.log("error", error);
    }
  },
};
</script>
<style scoped>
.bold.paragraph {
  @apply mt-10 lg:mt-12 text-lg sm:text-xl lg:text-2xl font-haffer;
}

.heading-3 {
  @apply text-base sm:text-lg lg:text-xl mt-16 font-bold;
  @apply font-haffer;
}
</style>
