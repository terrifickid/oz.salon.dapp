<template>
  <div class="">
    <FormLabel :count="count" :required="required">{{ title }}</FormLabel>
    <FormHelp :help="helpText" v-if="help" />
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
    <span v-show="progress != 0" class="ml-10 sm:ml-0 font-haffer">
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
      helpText: '',
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
    this.helpText = this.help + "<p class='mt-2'>We have a 50mb file size upload limit, or it will be rejected by <a href='https://upload.io'><u><strong>upload.io</strong></u></a></p>";
  },
};
</script>
