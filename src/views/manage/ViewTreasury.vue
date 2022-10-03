<template>
  <div class="container-fluid px-5">
    <div class="grid grid-cols-12">
      <div class="col-span-3">
        <ManageNav />
      </div>
      <div class="col-span-9">
        <p>
          <b>Treasury</b><br />
          <span class="opacity-50"
            >Financial summary cras ac mi id mauris posuere vulputate eget a
            leo. Suspendisse et consequat neque.</span
          >
        </p>

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
              >{{ treasury.totalUnits }}</span
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
          <div>
            <span>Suggested Trading Value (per unit)</span><br /><span>
              {{
                format.format(
                  ((treasury.collectionValue + treasury.balance) /
                    treasury.totalUnits) *
                    1.25
                )
              }}</span
            >
          </div>
        </div>
        <div class="border-t border-black mt-12 pt-1">
          <span>Most Recent Trade Price (per unit)</span><br />
          <span class="text-2xl text-green-500">{{ format.format(0) }}</span>
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
      treasury: {},
      format: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }),
    };
  },
  async beforeMount() {
    console.log("treasury load!");
    //Treasury Data
    try {
      const res = await axios.get(
        process.env.VUE_APP_URI + "/treasury?cache=true"
      );
      this.treasury = res.data.message;
    } catch (error) {
      console.log("error", error);
    }
    console.log(this.treasury);
  },
};
</script>
