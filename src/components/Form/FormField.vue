<template>
  <div class="grid grid-cols-12 px-3 mr-5 sm:mr-24">
    <template v-if="isChoice(field)">
      <InputChoice
        class="app-frame"
        :count="index + 1"
        :title="field.name"
        :choices="field.validations[0].in"
        :required="true"
        :help="helpText(field.id)"
        @update="updateValue"
        @ready="$emit('ready')"
    /></template>
    <template v-else>
      <template v-if="isUpload(field.id)"
        ><InputUpload
          class="app-frame"
          :count="index + 1"
          :title="field.name"
          :required="true"
          :help="helpText(field.id)"
          @update="updateValue"
          @ready="$emit('ready')"
      /></template>
      <template v-else>
        <InputText
          class="app-frame"
          :count="index + 1"
          :title="field.name"
          :required="true"
          :help="helpText(field.id)"
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
      console.log(field);
      return field.validations.length && "in" in field.validations[0];
    },
    updateValue(val) {
      this.$emit("update:modelValue", val);
    },
    isUpload(id) {
      var check = id.split("0");
      return check.includes("upload");
    },
    helpText(id) {
      var msg = null;
      switch (id) {
        case "uploadTaxForms0upload":
          msg =
            'Forms can be downloaded <a class="underline" href="#">here</a>. Please use the W9 form if you are a US investor, or the appropriate W8 form if you are a foreign investor.';
          break;
        case "downloadAndReviewSalonsOperatingAgreement":
          msg =
            "Download Salon's Operating Agreement <a class='underline' href='#'>here</a>";
          break;
      }
      return msg;
    },
  },
};
</script>
