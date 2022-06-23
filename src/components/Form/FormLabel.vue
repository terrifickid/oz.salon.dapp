<template>
  <label class="block mb-4 flex items-center sm:-ml-10"
    ><span class="text-sm">{{ count }}</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-4 mr-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      /></svg
    ><slot></slot
  ></label>
</template>
<script>
export default {
  props: ["count", "required"],
};
</script>
