<template>
  <AppShell
    :colors="colors"
    :isLoaded="loaded"
    :protected="false"
    class="pb-64"
  >
    <div class="grid grid-cols-12 pt-20 w-full font-haffer px-5">
      <div class="col-span-12 md:col-span-6 text-2xl">
        <p class="mb-16">Frequently Asked Questions</p>

        <ul v-if="loaded">
          <li class="mb-8" v-for="(item, index) in data" :key="index">
            <p class="pb-6" v-html="item.fields.question"></p>
            <p
              class="opacity-50"
              :class="{ truncate: !active.includes(index) }"
              v-html="item.fields.answer"
            ></p>
            <p class="opacity-50" v-show="!active.includes(index)">
              <button @click="active.push(index)">+ Read more</button>
            </p>
          </li>
        </ul>
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
      active: [],
      loaded: false,
    };
  },
  async mounted() {
    try {
      const res = await axios.get(process.env.VUE_APP_URI + "/type/faq");
      this.data = res.data.message.items;
      this.data.sort(function compareFn(a, b) {
        console.log("test", a.fields.order, b.fields.order);
        if (a.fields.order > b.fields.order) return 1;
        if (a.fields.order < b.fields.order) return -1;
        return 0;
      });
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
