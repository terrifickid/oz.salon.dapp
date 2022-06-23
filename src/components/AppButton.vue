<template>
  <button
    @mouseover="hover = true"
    @mouseleave="hover = false"
    :class="{
      ['bg-' + colors[1]]: hover,
      ['text-' + colors[1]]: !hover,
      ['text-' + colors[0]]: hover,
      ['border-' + colors[1]]: true,
    }"
    class="py-2 px-5 rounded-full border inline-block text-sm"
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
