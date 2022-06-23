<template>
  <div>
    <FormLabel :count="count" :required="required">{{ title }}</FormLabel>
    <input v-show="!progress" type="file" ref="file" @change="execute" />
    <div
      v-show="progress"
      class="bg-black h-4"
      :style="{ width: progress + '%' }"
    ></div>
    <span v-show="progress != 0">
      {{ progress }}%
      <span v-show="progress != 100">Uploading...</span>
      <span v-show="progress == 100">Complete!</span></span
    >
    <div class="flex mt-4 items-center">
      <button
        @click="$emit('ready')"
        class="flex border border-black hover:bg-black hover:text-white px-6 py-2 rounded-full"
      >
        Ok
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </button>
      <span class="text-sm ml-4">Press <b class="font-bold">Enter ↵</b></span>
    </div>
  </div>
</template>
<script>
import { Upload } from "upload-js";
import FormLabel from "@/components/Form/FormLabel.vue";
export default {
  components: {
    FormLabel,
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
