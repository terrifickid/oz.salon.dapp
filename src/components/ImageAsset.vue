<template>
  <div v-if="item">
    <div
      v-if="imageSrc"
      :src="imageSrc"
      style="max-height: 50vh"
      class="bg-cover bg-center aspect-square mx-auto relative"
      :style="{ backgroundImage: 'url(' + imageSrc + ')' }"
    ></div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: ["item"],
  data() {
    return {
      imageSrc: null,
    };
  },
  async mounted() {
    try {
      const res = await axios.get(
        "https://salontest-terrifickid.cloud.okteto.net/asset/" +
          this.item.fields.image["en-US"].sys.id
      );
      this.imageSrc = res.data.url;
      console.log("image is", res.data);
    } catch (error) {
      console.log("error", error);
    }
  },
};
</script>
