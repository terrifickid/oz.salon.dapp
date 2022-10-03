<template>
  <AppShell :colors="colors" :isLoaded="isDone" :protected="true">
    <AppContent class="items-center justify-center" v-show="isComplete">
      <div class="text-center">
        <p>The transfer is complete</p>
        <p>You sent {{ amount }} USDC to {{ sentToName }}</p>
        <p>Unit holdings will be updated in your profile.</p>
      </div>
    </AppContent>
    <div v-show="isDone && !isComplete" class="pt-32 pb-32">
      <div class="grid grid-cols-12 w-full">
        <div class="app-frame">
          <div class="px-3">
            <router-link to="/create-transfer"
              ><AppButton>Create New Transfer</AppButton></router-link
            >
            <p class="text-xl mt-10">Available Transfers</p>
            {{ complete }}
            <p class="text-sm mt-3" v-if="!transfers.length">No transfers.</p>
            <ListTransferItem
              v-for="(item, index) in transfers"
              :key="index"
              :item="item"
              @transfer="transferComplete"
              @loading="loading"
              @done="done"
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
      complete: null,
      format: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }),
    };
  },
  computed: {
    sentToName() {
      var p = _.get(this.complete, "fields.profile");
      if (!p) return;
      return p.firstName + " " + p.lastName;
    },
    amount() {
      var a = _.get(this.complete, "fields.units0units");
      if (!a) return;
      return this.format.format(JSON.parse(a).amount);
    },
    uri() {
      return process.env.VUE_APP_URI + "/transfers";
    },
    name() {
      return _.get(this.complete, "name");
    },
    isComplete() {
      return _.get(this.complete, "sys");
    },
  },
  methods: {
    transferComplete(item) {
      console.log("transfer!", item);
      this.complete = item;
      this.isDone = true;
    },
    loading() {
      this.isDone = false;
    },
    done() {
      this.isDone = true;
    },
  },
  async beforeMount() {
    var res = await axios.get(this.uri);
    console.log("test", res);
    this.transfers = res.data;
    this.isDone = true;
  },
};
</script>
