<template>
  <img :src="imageSrc" style="height: 50vh" class="mr-3" />
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
