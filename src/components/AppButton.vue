<template>
  <a
    @mouseover="hover = true"
    @mouseleave="hover = false"
    :class="{
      ['bg-' + colors[1]]: hover,
      ['text-' + colors[1]]: !hover,
      ['text-' + colors[0]]: hover,
      ['border-' + colors[1]]: true,
    }"
    class="py-3 px-8 rounded-full border-2 inline-block"
  >
    <slot></slot>
  </a>
</template>
<script>
export default {
  props: ["colors"],
  data() {
    return {
      hover: false,
    };
  },
};
</script>
