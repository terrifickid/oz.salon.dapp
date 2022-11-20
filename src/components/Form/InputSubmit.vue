<template>
  <div>
    <FormLabel :count="count" :required="required">{{ title }}</FormLabel>
    <FormHelp :help="help" v-if="help" />
    <div class="font-haffer">
      <button
        class="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 block mb-2"
        v-for="(choice, index) in choices"
        :key="index"
        @click="
          selectedIndex = index;
          $emit('update', choices[selectedIndex]);
          $emit('ready');
        "
      >
        <span>{{ choice }}</span>
      </button>
    </div>
    <FormButtonOk @ready="$emit('ready')" v-if="0" @back="$emit('back')" />
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
