<template>
  <div class="grid grid-cols-12 px-3">
    <template v-if="isChoice(field)">
      <InputChoice
        class="app-frame"
        :count="index + 1"
        :title="field.name"
        :choices="field.validations[0].in"
        :required="true"
        @update="updateValue"
        @ready="$emit('ready')"
    /></template>
    <template v-else>
      <template
        v-if="
          field.id == 'idScan' ||
          field.id == 'recentIncomeDocumentation' ||
          field.id == 'previousIncomeDocumentation'
        "
        ><InputUpload
          class="app-frame"
          :count="index + 1"
          :title="field.name"
          :required="true"
          @update="updateValue"
          @ready="$emit('ready')"
      /></template>
      <template v-else>
        <InputText
          class="app-frame"
          :count="index + 1"
          :title="field.name"
          :required="true"
          @update="updateValue"
          @ready="$emit('ready')"
        />
      </template>
    </template>
  </div>
</template>
<script>
import InputText from "@/components/Form/InputText.vue";
import InputChoice from "@/components/Form/InputChoice.vue";
import InputUpload from "@/components/Form/InputUpload.vue";
export default {
  components: { InputText, InputChoice, InputUpload },
  props: ["modelValue", "field", "index"],
  methods: {
    isChoice(field) {
      return field.validations.length && "in" in field.validations[0];
    },
    updateValue(val) {
      this.$emit("update:modelValue", val);
    },
  },
};
</script>
