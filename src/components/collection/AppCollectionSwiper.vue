<template>
  <full-page
    :options="{
      fitToSection: false,
      licenseKey: 'K9EP6-N164H-2BKM8-MJLGI-KSURM',
      loopHorizontal: true,
      autoScrolling: false,
      dragAndMove: false,
      dragAndMoveKey: 'c2Fsb25kYW8ueHl6X3RNUVpISmhaMEZ1WkUxdmRtVT05SWY',

      controlArrows: false,
    }"
    class=""
  >
    <div class="section">
      <div class="slide" v-for="(image, index) in images" :key="index">
        <img
          @mousedown="mousedown"
          @mouseup="mouseup"
          :src="proxyImageURI(image.fields.file.url)"
          class="w-full cursor-pointer"
        />
      </div>
    </div>
  </full-page>
</template>
<script>
export default {
  props: ["images"],
  methods: {
    proxyImageURI(src) {
      return process.env.VUE_APP_URI + "/proxy?image=https://" + src;
    },
    mousedown() {
      console.log("mousedown");
    },
    mouseup() {
      console.log("moseup");
    },
    load() {
      console.log("load!");
      document.getElementById("pizza").style.position = "sticky";
      //  document.getElementById("pizza").style.overflow = "scroll";
    },
    render() {
      //document.getElementById("pizza").style.position = "fixed";
      document.getElementById("pizza").style.overflow = "scroll";
      document.getElementById("bg_s").style.height = "auto";
      console.log("render");
    },
  },
  beforeCreated() {
    console.log("swipe create!");
    //document.getElementById("pizza").style.position = "relative";
  },
};
</script>
<style>
.slide img {
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.fp-scrollable .fp-section {
  width: 100% !important;
  height: auto !important;
}
.fp-scrollable .fp-slide {
  height: auto !important;
}
</style>
