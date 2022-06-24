<template>
  <div class="">
    <FormLabel :count="count" :required="required">{{ title }}</FormLabel>
    <input
      v-show="!progress"
      type="file"
      ref="file"
      @change="execute"
      class="ml-10 sm:ml-0 font-akr"
    />
    <div
      v-show="progress"
      class="bg-black h-4 ml-10 sm:ml-0"
      :style="{ width: progress + '%' }"
    ></div>
    <span v-show="progress != 0" class="ml-10 sm:ml-0 font-ak">
      {{ progress }}%
      <span v-show="progress != 100">Uploading...</span>
      <span v-show="progress == 100">Complete!</span></span
    >
    <FormButtonOk @ready="$emit('ready')" />
  </div>
</template>
<script>
import { Upload } from "upload-js";
import FormLabel from "@/components/Form/FormLabel.vue";
import FormButtonOk from "@/components/Form/FormButtonOk.vue";
export default {
  components: {
    FormLabel,
    FormButtonOk,
  },
  props: ["count", "title", "required"],
  data() {
    return {
      upload: {},
      progress: 0,
    };
  },
  methods: {
    async execute() {
      console.log("Begin upload!");
      this.uploading = true;
      var file = this.$refs.file.files[0];
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
