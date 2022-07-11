<template>
  <AppShell
    :colors="colors"
    :isLoaded="loaded"
    :protected="true"
    class="font-haffer"
  >
    <div class="pt-32 pb-64">
      <div class="grid grid-cols-12 w-full">
        <div class="app-frame">
          <div class="px-3">
            <p class="text-xl">My Prodposals</p>
            <p class="text-sm mt-3">No proposals currently submitted.</p>

            <p class="mt-24 text-xl">All Proposals</p>
            <div class="mt-3">
              <div
                v-for="(item, index) in proposals"
                :key="index"
                class="border-b border-black py-3 grid grid-cols-12"
              >
                <div class="col-span-8">
                  <b class="capitalize">{{ item.contentType }}</b>
                  {{ item.id }}
                  <AppCountdown :start="item.createdAt" />
                </div>
                <div class="col-span-4 flex items-center justify-end text-sm">
                  <router-link :to="'/governance/' + item.id"
                    ><AppButton class="flex items-center"
                      >View Proposal
                    </AppButton></router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppShell>
</template>
<script>
// @ is an alias to /src
import axios from "axios";

import AppCountdown from "@/components/AppCountdown";
import AppShell from "@/components/AppShell";

import AppButton from "@/components/AppButton";

export default {
  components: {
    AppShell,

    AppCountdown,
    AppButton,
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
  computed: {
    walletAddress() {
      return this.$store.state.walletAddress;
    },
  },
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
        process.env.VUE_APP_URI + "/type/" + type + "?cache=true",
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
