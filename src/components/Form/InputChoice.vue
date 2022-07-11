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
        <span
          :class="{
            'bg-black text-white': selectedIndex == index,
            'bg-white text-black ': selectedIndex != index,
          }"
          class="flex border border-black rounded items-center justify-center text-xs sm:text-sm mr-2"
          ><span class="w-6 h-6 flex items-center justify-center">{{
            getSymbol(index)
          }}</span></span
        >
        <span class="text-left text-sm sm:text-md">{{ choice }}</span>
      </button>
    </div>
    <FormButtonOk @ready="$emit('ready')" />
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
      var symbols = ["A", "B", "C"];
      return symbols[i];
    },
  },
};
</script>
