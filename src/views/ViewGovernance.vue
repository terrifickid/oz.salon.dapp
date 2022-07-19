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
            <p class="text-xl">My Proposals</p>
            <p class="text-sm mt-3" v-if="!myProposals.length">No proposals.</p>
            <ListProposalItem
              v-for="(item, index) in myProposals"
              :key="index"
              :item="item"
            />

            <p class="mt-24 text-xl">All Proposals</p>
            <div class="mt-3">
              <p class="text-sm mt-3" v-if="!proposals.length">No proposals.</p>
              <ListProposalItem
                v-for="(item, index) in proposals"
                :key="index"
                :item="item"
              />
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

import AppShell from "@/components/AppShell";

import ListProposalItem from "@/components/ListProposalItem";

export default {
  components: {
    AppShell,
    ListProposalItem,
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
    myProposals() {
      return this.proposals.filter(
        (item) => item.profile.walletAddress == this.walletAddress
      );
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
            profile: value.fields.profile,
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
  },
};
</script>
<style scoped>
select {
  border: 0px;
  outline: 0px;
}
</style>
