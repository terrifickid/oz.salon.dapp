<template>
  <div class="">
    <FormLabel :count="count" :required="required">{{ title }}</FormLabel>

    <p v-for="(file, index) in files" :key="index" class="mb-4">
      {{ file.name }} ({{ formatBytes(file.size) }})
      <span class="pl-4 cursor-pointer opacity-50" @click="remove(index)">Remove</span>
    </p>
    <input v-show="!progress" type="file" ref="file" @change="execute" class="sm:ml-0 font-haffer" title="" />
    <div v-show="progress" class="bg-black h-1 ml-10 sm:ml-0" :style="{ width: progress + '%' }"></div>
    <span v-show="progress != 0" class="ml-10 sm:ml-0 font-haffer hidden">
      {{ progress }}%
      <span v-show="progress != 100">Uploading...</span>
      <span v-show="progress == 100">Complete!</span></span>
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
  emits: ["ready", "update"],
  data() {
    return {
      upload: {},
      progress: 0,
      helpText: "",
      files: [],
    };
  },
  methods: {
    formatBytes(a, b = 2) {
      if (!+a) return "0 Bytes";
      const c = 0 > b ? 0 : b,
        d = Math.floor(Math.log(a) / Math.log(1024));
      return `${parseFloat((a / Math.pow(1024, d)).toFixed(c))} ${["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][d]
        }`;
    },
    async remove(index) {
      this.files = [
        ...this.files.slice(0, index),
        ...this.files.slice(index + 1),
      ];
    },
    async execute() {
      console.log("Begin upload!");
      this.uploading = true;
      var file = this.$refs.file.files[0];
      var type = file.type;
      var name = file.name;
      var size = file.size;
      if (file.size > 5000000) {
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
      this.files.push({ type: type, name: name, size: size, url: fileUrl });
      this.progress = 0;
      this.$emit("update", JSON.stringify(this.files));
    },
  },
  mounted() {
    this.upload = new Upload({ apiKey: "public_12a1xmB3sgHFxd1HZqjm5Kh2y1zd" });
  },
};
</script>
<style>
input[type="file"] {
  color: transparent;
  @apply block;
}
</style>
