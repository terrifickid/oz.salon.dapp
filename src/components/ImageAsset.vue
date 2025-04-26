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
      return this.image.imagedata;
    },
  },
  async mounted() {
    console.log(this.image);
  },
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
