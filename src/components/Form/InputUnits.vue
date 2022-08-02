<template>
  <div>
    <FormLabel :count="count" :required="required">{{ title }}</FormLabel>
    <FormHelp :help="help" v-if="help" />
    <div class="grid grid-cols-2 gap-6">
      <div class="col">
        <input
          type="number"
          class="font-haffer text-xl sm:ml-0 bg-transparent block border-b border-black w-full text-black py-3 outline-none placeholder-opb"
          placeholder="Amount"
          required
          v-model="amount"
          @input="update"
          autocomplete="off"
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
    <div class="text-sm mt-3">Per unit price: {{ perUnitPrice }}</div>
    <FormButtonOk @ready="$emit('ready')" />
  </div>
</template>
<script>
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
    };
  },
  computed: {
    perUnitPrice() {
      var val = this.amount / this.units;
      if (!Number.isFinite(val)) return this.format.format(0);
      return this.format.format(val);
    },
    value() {
      return { units: this.units, amount: this.amount };
    },
  },
  methods: {
    update() {
      if (this.units && this.amount) this.$emit("update", this.value);
    },
  },
};
</script>
