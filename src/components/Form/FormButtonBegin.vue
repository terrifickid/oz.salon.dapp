<template>
  <div class="flex mt-10 items-center text-green-500">
    <a @click="$emit('ready')" class="flex items-center cursor-pointer"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 mr-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
        />
      </svg>
      Start
    </a>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>
