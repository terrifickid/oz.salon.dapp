<template>
  <div>
    <FormLabel :count="count" :required="required">{{ title }}</FormLabel>
    <input
      type="text"
      class="text-3xl bg-transparent block border-b border-black w-full text-black py-3 outline-none placeholder-opb font-light"
      placeholder="Type your Answer here"
      required
      v-model="sAmount"
      @keyup.enter="$emit('clicked')"
    />
    <div class="flex mt-4 items-center">
      <button
        @click="$emit('clicked')"
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
  props: ["count", "title", "required", "placeholder"],
};
</script>
