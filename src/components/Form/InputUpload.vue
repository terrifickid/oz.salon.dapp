<template>
  <div class="">
    <FormLabel :count="count" :required="required">{{ title }}</FormLabel>

    <input
      v-show="!progress"
      type="file"
      ref="file"
      @change="execute"
      class="sm:ml-0 font-haffer"
    />
    <div
      v-show="progress"
      class="bg-black h-4 ml-10 sm:ml-0"
      :style="{ width: progress + '%' }"
    ></div>
    <span v-show="progress != 0" class="ml-10 sm:ml-0 font-haffer hidden">
      {{ progress }}%
      <span v-show="progress != 100">Uploading...</span>
      <span v-show="progress == 100">Complete!</span></span
    >
    <FormHelp :help="help" v-if="help" />
    <FormButtonOk @ready="$emit('ready')" @back="$emit('back')" />
  </div>
</template>
<script>
import { Upload } from "upload-js";
import FormLabel from "@/components/Form/FormLabel.vue";
import FormHelp from "@/components/Form/FormHelp.vue";
import FormButtonOk from "@/components/Form/FormButtonOk.vue";
export default {
  components: {
    FormLabel,
    FormButtonOk,
    FormHelp,
  },
  props: ["count", "title", "required", "help"],
  emits: ["ready"],
  data() {
    return {
      upload: {},
      progress: 0,
      helpText: "",
    };
  },
  methods: {
    async execute() {
      console.log("Begin upload!");
      this.uploading = true;
      var file = this.$refs.file.files[0];
      if (file.size > 5000000) {
        this.$refs.file.value = null;
        return alert("Limit file size to 5mb.");
      }
      const { fileUrl, fileId } = await this.upload.uploadFile({
        file: file,
        onProgress: ({ bytesSent, bytesTotal }) => {
          console.log(
            `${Math.round((bytesSent / bytesTotal) * 100)}% complete`
          );
          this.progress = Math.round((bytesSent / bytesTotal) * 100);
        },
      });
      console.log(fileUrl, fileId);
      this.$emit("update", fileUrl);
      this.$emit("ready");
    },
  },
  mounted() {
    this.upload = new Upload({ apiKey: "public_12a1xmB3sgHFxd1HZqjm5Kh2y1zd" });
  },
};
</script>
