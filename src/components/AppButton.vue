<template>
  <button
    @mouseover="hover = true"
    @mouseleave="hover = false"
    class="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 block"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  data() {
    return {
      hover: false,
      colors: ["white", "black"],
    };
  },
};
</script>
