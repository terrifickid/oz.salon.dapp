<template>
  <div
    class="w-full h-full z-50 fixed bg-gray-100 top-0 left-0 flex items-center justify-center"
  >
    <button class="absolute top-5 right-5" @click="$emit('close')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
    <embed :src="file.url" class="w-full h-full text-center" />
  </div>
</template>
<script>
export default {
  props: ["file"],
  emits: ["close"],
};
</script>
