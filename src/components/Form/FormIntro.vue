<template>
  <div class="grid grid-cols-12 px-3">
    <div class="app-frame">
      <div class="sm:ml-0">
        <p class="app-text mb-2 font-mono">{{ name }}</p>
        <p class="font-ak">{{ description }}</p>
        <FormButtonBegin @ready="$emit('ready')" />
      </div>
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
