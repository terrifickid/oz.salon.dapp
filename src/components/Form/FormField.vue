<template>
  <div class="grid grid-cols-12 px-3 mr-5 sm:mr-24">
    <template v-if="getChoice">
      <InputChoice
        class="app-frame"
        :count="index + 1"
        :title="getTitle"
        :choices="getChoice"
        :required="true"
        :help="getHelpText"
        @update="updateValue"
        @ready="$emit('ready')"
    /></template>
    <template v-else>
      <template v-if="isUpload"
        ><InputUpload
          class="app-frame"
          :count="index + 1"
          :title="getTitle"
          :required="true"
          :help="getHelpText"
          @update="updateValue"
          @ready="$emit('ready')"
      /></template>
      <template v-else>
        <InputText
          class="app-frame"
          :count="index + 1"
          :title="getTitle"
          :required="true"
          :help="getHelpText"
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
  computed: {
    getChoice() {
      var choice = this.field.validations.filter(function (v) {
        return "in" in v;
      });
      if (choice.length) return choice[0].in;
      return false;
    },
    getTitle() {
      var title = this.field.validations.filter(function (v) {
        return "prohibitRegexp" in v;
      });
      if (title.length) return title[0].prohibitRegexp.pattern;
      return "No Title";
    },
    getHelpText() {
      var helpText = this.field.validations.filter(function (v) {
        return "prohibitRegexp" in v;
      });
      if (helpText.length) return helpText[0].message;
      return false;
    },
    isUpload() {
      var check = this.field.id.split("0");
      return check.includes("upload");
    },
  },
  methods: {
    updateValue(val) {
      this.$emit("update:modelValue", val);
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
        case "executeAndUploadSalonsSubscriptionAgreement0upload":
          msg =
            'Download the Subscription Agreement <a class="underline" href="#">here</a>';
          break;
      }
      return msg;
    },
  },
};
</script>
