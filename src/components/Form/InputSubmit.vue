<template>
  <div>
    <FormLabel :count="count" :required="required">{{ title }}</FormLabel>
    <FormHelp :help="help" v-if="help" />
    <div class="grid grid-cols-12 gap-2 sm:ml-0 font-haffer">
      <button
        :class="{ 'ring-1 ring-black': selectedIndex == index }"
        class="group flex col-span-12 items-center justify-start p-2 border border-black rounded hover:ring-1 ring-black"
        v-for="(choice, index) in choices"
        :key="index"
        @click="
          selectedIndex = index;
          $emit('update', choices[selectedIndex]);
          $emit('ready');
        "
      >
        <span class="text-left text-sm sm:text-md ml-2">{{ choice }}</span>
      </button>
    </div>
    <FormButtonOk @ready="$emit('ready')" v-if="0" />
  </div>
</template>
<script>
import FormHelp from "@/components/Form/FormHelp.vue";
import FormLabel from "@/components/Form/FormLabel.vue";
import FormButtonOk from "@/components/Form/FormButtonOk.vue";
export default {
  components: {
    FormLabel,
    FormButtonOk,
    FormHelp,
  },
  props: ["count", "title", "required", "choices", "help"],
  emits: ["ready"],
  data() {
    return {
      selectedIndex: null,
    };
  },
  methods: {
    getSymbol(i) {
      var symbols = ["A", "B", "C", "D", "E", "F"];
      return symbols[i];
    },
  },
};
</script>
