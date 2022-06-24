<template>
  <div class="grid grid-cols-12 px-3">
    <div class="app-frame">
      <p class="app-text mb-2">{{ name }}</p>
      <p>{{ description }}</p>
      <FormButtonBegin @ready="$emit('ready')" />
    </div>
  </div>
</template>
<script>
import FormButtonBegin from "@/components/Form/FormButtonBegin.vue";
export default {
  components: { FormButtonBegin },
  props: ["name", "description"],
};
</script>
