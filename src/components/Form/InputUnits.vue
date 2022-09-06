<template>
  <div>
    <FormLabel :count="count" :required="required">{{ title }}</FormLabel>
    <FormHelp :help="help" v-if="help" />
    <div class="grid grid-cols-2 gap-6">
      <div class="col flex items-center">
        <span class="text-xl mr-2 -ml-5">$</span>
        <input
          type="number"
          class="font-haffer text-xl sm:ml-0 bg-transparent block border-b border-black w-full text-black py-3 outline-none placeholder-opb"
          placeholder="Amount"
          required
          v-model="amount"
          @input="update"
          autocomplete="off"
          @change="formatAmount"
        />
      </div>
      <div class="col">
        <input
          type="number"
          class="font-haffer text-xl sm:ml-0 bg-transparent block border-b border-black w-full text-black py-3 outline-none placeholder-opb"
          placeholder="Units"
          @input="update"
          required
          v-model="units"
          autocomplete="off"
        />
      </div>
    </div>
    <div class="text-sm mt-3">
      Per unit price: {{ format.format(perUnitPrice) }}
    </div>
    <FormButtonOk @ready="next" />
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
  emits: ["ready"],
  data() {
    return {
      units: "",
      amount: "",
      format: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }),
      treasury: {},
    };
  },
  computed: {
    bookValue() {
      return (
        _.get(this.treasury, "balance") +
        _.get(this.treasury, "balanceInUsdc") +
        _.get(this.treasury, "collectionValue")
      );
    },
    suggestedTradingPrice() {
      var c = this.bookValue / _.get(this.treasury, "totalUnits");
      return c.toFixed(2);
    },
    perUnitPrice() {
      var val = this.amount / this.units;
      if (!Number.isFinite(val)) return 0;
      return val;
    },
    value() {
      return JSON.stringify({ units: this.units, amount: this.amount });
    },
  },
  methods: {
    next() {
      if (this.amount < 30000) {
        alert("Proposal below the minimum buy-in price of $30,000.");
        return;
      }
      if (this.perUnitPrice < this.suggestedTradingPrice) {
        alert(
          "Your offer is below the appraised value of Salon's assets and can not be accepted. Please try again with an offer at or above book value."
        );
        return;
      }
      this.$emit("ready");
    },
    update() {
      if (this.units && this.amount) this.$emit("update", this.value);
    },
    formatAmount() {
      console.log(this.amount);
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
