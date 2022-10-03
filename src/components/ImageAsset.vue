<template>
  <img :src="imageSrc" />
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
    uri() {
      return process.env.VUE_APP_URI + "/asset/" + this.image.sys.id;
    },
  },
  async mounted() {
    try {
      const res = await axios.get(this.uri);
      this.imageSrc = res.data.url;
      console.log("image is", this.image.sys.id, res.data);
    } catch (error) {
      console.log("error", error);
    }
  },
};
</script>
<style scoped>
* {
  cursor: pointer;
  -khtml-user-select: none;
  -o-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
</style>
