<template>
  <img :src="src" />
</template>
<script>
import axios from "axios";
export default {
  props: ["image"],
  data() {
    return {
      imageSrc: null,
    };
  },
  computed: {
    src() {
      return (
        process.env.VUE_APP_URI +
        "/optimize?image=https:" +
        this.image.fields.file.url
      );
    },
  },
  async mounted() {},
};
</script>
<style scoped>
* {
  -khtml-user-select: none;
  -o-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
</style>
