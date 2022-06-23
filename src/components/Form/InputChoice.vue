<template>
  <div>
    <FormLabel :count="count" :required="required">{{ title }}</FormLabel>
    <div class="grid grid-cols-12 gap-2">
      <button
        :class="{ 'ring-1 ring-black': selectedIndex == index }"
        class="flex col-span-12 items-center justify-start p-2 border border-black rounded hover:bg-oblack-100"
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
            'bg-white': selectedIndex != index,
          }"
          class="flex-none border border-black rounded w-6 h-6 items-center justify-center text-sm mr-2"
          >{{ getSymbol(index) }}</span
        >
        <span class="text-left">{{ choice }}</span>
      </button>
    </div>
    <div class="flex mt-4 items-center">
      <button
        @click="$emit('ready')"
        class="flex border border-black hover:bg-black hover:text-white px-6 py-2 rounded-full"
      >
        Ok
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </button>
      <span class="text-sm ml-4">Press <b class="font-bold">Enter ↵</b></span>
    </div>
  </div>
</template>
<script>
import FormLabel from "@/components/Form/FormLabel.vue";
export default {
  components: {
    FormLabel,
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
