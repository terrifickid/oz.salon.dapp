<template>
  <AppShell
    :colors="colors"
    :isLoaded="loaded"
    :protected="true"
    class="font-haffer"
  >
    <div
      class="pt-24 text-center w-full absolute z-40 keyboard-off font-haffer"
    >
      <select class="text-right p-2 font-bold">
        <option>Active</option>
        <option>Completed</option>
      </select>
    </div>
    <AppFullpage>
      <div v-for="(item, index) in proposals" :key="index" class="section">
        <div class="grid grid-cols-12 w-full gap-3 px-3" style="height: 50vh">
          <div class="col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-2">
            <b class="uppercase">{{ item.contentType }}</b
            ><br />
            {{ item.id }}

            <CounterVote :votes="item.votes" :weights="this.weights" />

            <AppCountdown :start="item.createdAt" class="mt-2" />

            <div class="mt-3 flex">
              <AppButtonVote
                :id="item.id"
                :votes="item.votes"
                :choice="true"
                :label="'Yes'"
                class="mr-2"
              />
              <AppButtonVote
                :id="item.id"
                :votes="item.votes"
                :choice="false"
                :label="'No'"
              />
            </div>
          </div>
          <div class="col-span-6 sm:col-span-8 lg:col-span-9 xl:col-span-10">
            <ul>
              <li
                v-for="(field, index) in item.fields"
                :key="index"
                class="mr-5 mb-5 text-sm text-right"
              >
                <b>{{ field.label }}</b
                ><br />{{ field.value }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AppFullpage>
  </AppShell>
</template>
<script>
// @ is an alias to /src
import axios from "axios";
import AppButtonVote from "@/components/AppButtonVote";
import CounterVote from "@/components/CounterVote";
import AppCountdown from "@/components/AppCountdown";
import AppShell from "@/components/AppShell";
import AppFullpage from "@/components/AppFullpage";

export default {
  components: {
    AppFullpage,
    AppShell,
    AppButtonVote,
    CounterVote,
    AppCountdown,
  },
  data() {
    return {
      colors: ["white", "black"],
      proposals: [],
      weights: [],
      types: ["collect", "invest", "propose", "sell", "transfer", "onboard"],
      loaded: false,
    };
  },
  computed: {},
  methods: {
    async getWeights() {
      try {
        const res = await axios.get(
          process.env.VUE_APP_URI + "/members?cache=true"
        );
        this.weights = res.data;
      } catch (error) {
        console.log("error", error);
      }
    },
    getFieldLabel(fields, id) {
      for (let field of fields) {
        if (field.id == id) return field.name;
      }
    },
    async assembleProposalType(type) {
      var endpoints = [
        "https://salontest-terrifickid.cloud.okteto.net/type/" + type,
        process.env.VUE_APP_URI + "/form/" + type + "?cache=true",
      ];
      var scope = this;
      try {
        var items = [];
        var e = await Promise.all(
          endpoints.map((endpoint) => axios.get(endpoint))
        );
        for (const value of Object.values(e[0].data.message.items)) {
          var votes = { votes: [] };
          if ("votes" in value.fields) {
            votes = value.fields.votes;
            delete value.fields.votes;
          }

          var fields = await Object.entries(value.fields).map(function (field) {
            var label = scope.getFieldLabel(e[1].data.fields, field[0]);
            return {
              label: label,
              value: field[1],
            };
          });

          var item = {
            id: value.sys.id,
            createdAt: value.sys.createdAt,
            contentType: value.sys.contentType.sys.id,
            votes: votes,
            fields: fields,
          };
          items.push(item);
        }

        return items;
      } catch (error) {
        console.error(error);
        return [];
      }
    },
  },
  async beforeMount() {
    console.log("proposals load!");
    var data = await Promise.all(
      this.types.map((type) => this.assembleProposalType(type))
    );
    this.proposals = data.flat();
    await this.getWeights();
    this.loaded = true;
    console.log("loaded!");
    console.log(this.proposals);
  },
};
</script>
<style scoped>
select {
  border: 0px;
  outline: 0px;
}
</style>
