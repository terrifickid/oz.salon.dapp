<template>
  <div>
    <FormLabel :count="count" :required="required">{{ title }}</FormLabel>

    <div class="grid grid-cols-2 gap-20">
      <div class="col-span-1 flex items-center border-b border-black">
        <span class="mr-2">$</span>
        <input
          type="number"
          class="font-haffer sm:ml-0 bg-transparent block w-full text-black py-3 outline-none placeholder-opb"
          placeholder="Amount"
          required
          v-model="amount"
          @input="update"
          autocomplete="off"
          @change="formatAmount"
        />
      </div>
      <div class="col-span-1">
        <input
          type="number"
          class="font-haffer sm:ml-0 bg-transparent block border-b border-black w-full text-black py-3 outline-none placeholder-opb"
          placeholder="Price per unit"
          @input="update"
          required
          v-model="pricePerUnit"
          autocomplete="off"
        />
      </div>
      <div class="col-span-1">
        <p class="opacity-50">Number of units</p>
        <p>{{ numberOfUnits }}</p>
      </div>
      <div class="col-span-1">
        <p class="opacity-50">Current trade price (per unit)</p>
        <p class="text-green-500">
          {{ format.format(treasury.currentTradePrice) }}
        </p>
      </div>
    </div>

    <FormHelp :help="help" v-if="help" />
    <FormButtonOk @ready="next" @back="$emit('back')" />
  </div>
</template>
<script>
import _ from "lodash";
import axios from "axios";
import FormLabel from "@/components/Form/FormLabel.vue";
import FormHelp from "@/components/Form/FormHelp.vue";
import FormButtonOk from "@/components/Form/FormButtonOk.vue";
export default {
  components: {
    FormLabel,
    FormButtonOk,
    FormHelp,
  },
  props: ["count", "title", "required", "placeholder", "help"],
  emits: ["ready", "update"],
  data() {
    return {
      units: "",
      pricePerUnit: null,
      amount: "",
      format: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }),
      treasury: {},
    };
  },
  computed: {
    minimumInvestment() {
      if (this.profileUnits > 0) return -1;
      return 0;
    },
    profileUnits() {
      return _.get(this.$store, "state.profile.units");
    },
    bookValue() {
      return (
        _.get(this.treasury, "balance") +
        _.get(this.treasury, "balanceInUsdc") +
        _.get(this.treasury, "collectionValue")
      );
    },
    numberOfUnits() {
      var n = Math.round(this.amount / this.pricePerUnit);
      if (Number.isInteger(n)) return n;
      return 0;
    },
    value() {
      return JSON.stringify({
        units: this.numberOfUnits,
        amount: this.amount,
        pricePerUnit: this.pricePerUnit,
      });
    },
  },
  methods: {
    next() {
      console.log("route", this.$route.name);
      if (this.$route.name == "Exchange") return this.$emit("ready");
      if (parseFloat(this.amount) < parseFloat(this.minimumInvestment)) {
        alert("Proposal below the minimum buy-in price of $30,000.");
        return;
      }

      if (
        parseFloat(this.pricePerUnit) <
        parseFloat(this.treasury.currentTradePrice)
      ) {
        alert(
          "You must invest at or above the current trade price of Salon units, please try again with a higher offer."
        );
        return;
      }

      this.$emit("ready");
    },
    update() {
      if (this.numberOfUnits && this.amount) this.$emit("update", this.value);
    },
    formatAmount() {
      this.amount = parseFloat(this.amount).toFixed(2);
    },
  },
  async mounted() {
    var res = await axios.get(process.env.VUE_APP_URI + "/treasury/");
    this.treasury = res.data.message;
    console.log(this.treasury);
  },
};
</script>
