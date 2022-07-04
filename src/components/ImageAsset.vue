<template>
  <div
    style="
      height: 50vh;
      width: 100%;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: relative;
      border-right: 0.75rem solid white;
    "
    class="flex items-center"
  >
    <div
      class="absolute top-0 right-0 left-0 bottom-0 z-20"
      draggable="false"
    ></div>
    <img :src="imageSrc" class="z-10 w-full" draggable="false" />
  </div>
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
  async mounted() {
    try {
      const res = await axios.get(
        "https://salontest-terrifickid.cloud.okteto.net/asset/" +
          this.image.sys.id
      );
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
