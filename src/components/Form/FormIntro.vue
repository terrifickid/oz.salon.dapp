<template>
  <div class="text-2xl">
    <p class="font-haffer opacity-50">{{ description }}</p>
    <FormButtonBegin @ready="$emit('ready')" />
  </div>
</template>
<script>
import FormButtonBegin from "@/components/Form/FormButtonBegin.vue";
export default {
  components: { FormButtonBegin },
  props: ["name", "description"],
};
</script>
