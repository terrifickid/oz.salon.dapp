<template>
  <div class="flex mt-4 items-center">
    <AppButton @click="$emit('ready')" class="flex items-center">
      Begin
    </AppButton>
  </div>
</template>
<script>
import AppButton from "@/components/AppButton.vue";
export default {
  components: { AppButton },
};
</script>
