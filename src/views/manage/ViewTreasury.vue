<template>
  <div class="container-fluid px-5">
    <div class="grid grid-cols-12 gap-5">
      <div class="col-span-12 md:col-span-3">
        <div class="md:fixed">
          <ManageNav />
        </div>
      </div>
      <div v-if="loaded" class="col-span-12 md:col-span-9">
        <b>Treasury</b><br />

        <div class="opacity-50" v-html="data.code"></div>

        <ul class="pt-10">
          <li class="pb-5">
            <span class="opacity-50">Appraised Collection Value</span
            ><br /><span class="text-2xl">{{
              format.format(treasury.collectionValue)
            }}</span>
          </li>
          <li class="pb-5">
            <span class="opacity-50">Cash Assets Available</span><br /><span
              class="text-2xl"
              >{{ format.format(treasury.balance) }}</span
            >
          </li>
          <li class="pb-5">
            <span class="opacity-50">Total Book Value</span><br /><span
              class="text-2xl"
              >{{
                format.format(treasury.balance + treasury.collectionValue)
              }}</span
            >
          </li>
          <li class="pb-5">
            <span class="opacity-50">Total Units Issued</span><br /><span
              class="text-2xl"
              >{{ decimal.format(treasury.totalUnits) }}</span
            >
          </li>
        </ul>
        <div class="grid grid-cols-2">
          <div>
            <span>Book Value (per unit)</span><br />
            {{
              format.format(
                (treasury.collectionValue + treasury.balance) /
                  treasury.totalUnits
              )
            }}
          </div>
        </div>
        <div class="border-t border-black mt-12 pt-1">
          <span>Current Trade Price (per unit)</span><br />
          <span class="text-2xl text-green-500">{{
            format.format(treasury.currentTradePrice)
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";
import ManageNav from "@/components/ManageNav";
export default {
  components: { ManageNav },
  data() {
    return {
      loaded: false,
      data: {},
      treasury: {},
      decimal: new Intl.NumberFormat("en-US", {
        style: "decimal",
      }),
      format: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }),
    };
  },
  async mounted() {
    console.log("content load!");
    try {
      const res = await axios.get(
        process.env.VUE_APP_URI + "/entry/2WgcedHH3c0EDpVKALRQnd"
      );
      this.data = res.data.fields;
    } catch (error) {
      console.log("error", error);
    }

    console.log("treasury load!");
    //Treasury Data
    try {
      const res = await axios.get(process.env.VUE_APP_URI + "/treasury");
      this.treasury = res.data.message;
    } catch (error) {
      console.log("error", error);
    }

    this.loaded = true;
  },
};
</script>
