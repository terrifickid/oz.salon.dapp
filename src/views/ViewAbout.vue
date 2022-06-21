<template>
  <AppShell :colors="colors" isLoaded="loaded">
    <div class="grid grid-cols-12 px-3 mt-16 pb-32">
      <div
        class="col-span-12 col-start-1 sm:col-span-10 sm:col-start-2 lg:col-span-8 lg:col-start-3"
        v-if="'fields' in content"
      >
        <p
          v-for="(item, index) in content.fields.content['en-US'].content"
          :key="index"
          class="app-text mb-8"
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
      colors: ["black", "white"],
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
<style scoped>
.bold {
  @apply font-bold;
}

.heading-3 {
  @apply text-3xl;
}
</style>
