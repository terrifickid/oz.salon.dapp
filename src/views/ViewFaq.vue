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
          <li
            class="mb-8"
            v-for="(section, sindex) in Object.entries(set)"
            :key="sindex"
          >
            <p class="text-green-500">{{ section[0] }}</p>
            <ul>
              <li v-for="(q, qindex) in section[1]" :key="qindex">
                <p class="pb-6 mt-8" v-html="q.fields.question"></p>
                <div
                  class="opacity-50"
                  :class="{ truncate: !active.includes(sindex + '_' + qindex) }"
                  v-html="q.fields.answer"
                ></div>
                <p
                  class="opacity-50"
                  v-show="!active.includes(sindex + '_' + qindex)"
                >
                  <button @click="active.push(sindex + '_' + qindex)">
                    + Read more
                  </button>
                </p>
              </li>
            </ul>
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
import _ from "lodash";
import axios from "axios";
import AppShell from "@/components/AppShell";

export default {
  components: { AppShell },
  data() {
    return {
      data: {},
      active: [],
      set: [],
      loaded: false,
    };
  },
  async mounted() {
    try {
      const res = await axios.get(process.env.VUE_APP_URI + "/type/faq");
      this.data = res.data.message.items;
      var sorter = await axios.get(process.env.VUE_APP_URI + "/form/faq");
      sorter = sorter.data.fields[0].validations[0].in;
      sorter.forEach((s) => {
        //Enumerate
        this.data.forEach((d) => {
          var section = _.get(d, "fields.section");
          if (section == s) {
            if (_.isArray(this.set[section])) {
              this.set[section].push(d);
            } else {
              this.set[section] = [d];
            }
          }
        });
        //Sort
        this.set[s].sort(function compareFn(a, b) {
          //console.log("test", a.fields.order, b.fields.order);
          if (a.fields.order > b.fields.order) return 1;
          if (a.fields.order < b.fields.order) return -1;
          return 0;
        });
      });

      console.log(this.set);

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
