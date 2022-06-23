<template>
  <div>
    <FormLabel :count="count" :required="required">{{ title }}</FormLabel>
    <div class="grid grid-cols-12 gap-2 ml-10 sm:ml-0">
      <button
        :class="{ 'ring-2 ring-black': selectedIndex == index }"
        class="group flex col-span-12 items-center justify-start p-2 border border-black rounded hover:ring-2 ring-black"
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
          class="flex border border-black rounded w-6 h-6 items-center justify-center text-xs sm:text-sm mr-2"
          >{{ getSymbol(index) }}</span
        >
        <span class="text-left text-md">{{ choice }}</span>
      </button>
    </div>
    <FormButtonOk @ready="$emit('ready')" />
  </div>
</template>
<script>
import FormLabel from "@/components/Form/FormLabel.vue";
import FormButtonOk from "@/components/Form/FormButtonOk.vue";
export default {
  components: {
    FormLabel,
    FormButtonOk,
  },
  props: ["count", "title", "required", "choices"],
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
