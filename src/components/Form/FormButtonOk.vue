<template>
  <div class="flex mt-4 items-center sm:ml-0">
    <AppButton @click="$emit('ready')" class="flex items-center">
      Ok
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 ml-1"
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
    </AppButton>
    <span class="text-xs ml-4 font-haffer"
      >Press <span class="font-haffer font-bold">Enter ↵</span></span
    >
  </div>
</template>
<script>
import AppButton from "@/components/AppButton.vue";
export default {
  components: { AppButton },
};
</script>
