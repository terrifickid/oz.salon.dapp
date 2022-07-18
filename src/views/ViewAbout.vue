<template>
  <AppShell :colors="colors" :isLoaded="loaded">
    <div class="grid grid-cols-12 px-3 pb-32 font-haffer">
      <div class="app-frame" v-if="'fields' in content">
        <div class="pt-3">
          <template
            v-for="(item, index) in content.fields.content.content"
            :key="index"
            ><template v-if="item.nodeType == 'heading-3'">
              <h3>
                <template v-for="(node, index) in item.content" :key="index">
                  <template v-if="node.nodeType == 'text'">
                    <span :class="getType(node.marks) + ' ' + item.nodeType">
                      {{ node.value }}
                    </span>
                  </template>
                </template>
              </h3>
            </template>
            <template v-if="item.nodeType == 'paragraph'">
              <p class="pb-4">
                <template v-for="(node, index) in item.content" :key="index">
                  <template v-if="node.nodeType == 'text'">
                    <span :class="getType(node.marks) + ' ' + item.nodeType">
                      {{ node.value }}
                    </span>
                  </template>
                  <template v-if="node.nodeType == 'hyperlink'">
                    <a :href="node.data.uri" class="font-bold underline">
                      {{ node.content[0].value }}
                    </a>
                  </template>
                </template>
              </p>
            </template>
            <template v-else-if="item.nodeType == 'unordered-list'">
              <ul class="list-disc ml-4 pb-4">
                <template v-for="(node, index) in item.content" :key="index">
                  <li class="pb-1">{{ node.content[0].content[0].value }}</li>
                </template>
              </ul>
            </template>
          </template>
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
        process.env.VUE_APP_URI + "/entry/hPgciuapvygaec22xEagO?cache=true"
      );
      this.content = res.data;
      console.log(this.content);
      console.log("about loaded!");
    } catch (error) {
      console.log("error", error);
    }
  },
};
</script>
<style scoped>
.bold.paragraph {
  @apply mt-10  text-lg sm:text-xl lg:text-2xl font-haffer font-bold inline-block;
}

.heading-3 {
  @apply inline-block text-base sm:text-lg lg:text-xl mt-16 font-bold;
  @apply font-haffer;
}

li {
}
</style>
