<template>
  <AppShell :colors="colors" :isLoaded="true" :protected="true">
    <AppContent v-if="name">test!</AppContent>
    <div v-if="isDone && !complete.length" class="pt-32 pb-32">
      <div class="grid grid-cols-12 w-full">
        <div class="app-frame">
          <div class="px-3">
            <router-link to="/create-transfer"
              ><AppButton>Create New Transfer</AppButton></router-link
            >
            <p class="text-xl mt-10">Available Transfers</p>
            <p class="text-sm mt-3" v-if="!transfers.length">No transfers.</p>
            <ListTransferItem
              v-for="(item, index) in transfers"
              :key="index"
              :item="item"
            />
          </div>
        </div>
      </div>
    </div>
  </AppShell>
</template>

<script>
// @ is an alias to /src
import _ from "lodash";
import axios from "axios";
import AppButton from "@/components/AppButton";
import AppContent from "@/components/AppContent";
import AppShell from "@/components/AppShell.vue";
import ListTransferItem from "@/components/ListTransferItem.vue";
export default {
  components: { AppShell, AppButton, ListTransferItem, AppContent },
  data() {
    return {
      colors: ["white", "black"],
      isDone: false,
      transfers: [],
      complete: {},
    };
  },
  computed: {
    uri() {
      return process.env.VUE_APP_URI + "/type/transfer";
    },
    name() {
      return _.get(this.complete, "name");
    },
  },
  async beforeMount() {
    var res = await axios.get(this.uri);
    console.log("test", res);
    this.transfers = res.data.message.items;
    this.isDone = true;
  },
};
</script>
