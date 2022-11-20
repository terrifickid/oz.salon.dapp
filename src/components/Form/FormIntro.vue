<template>
  <div class="form_intro">
    <div class="font-haffer opacity-50" v-html="description"></div>
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
<style>
.form_intro p {
  @apply mb-4;
}
</style>
