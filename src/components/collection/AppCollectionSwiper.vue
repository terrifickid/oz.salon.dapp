<template>
  <full-page
    :options="{
      fitToSection: false,
      licenseKey: 'K9EP6-N164H-2BKM8-MJLGI-KSURM',
      loopHorizontal: true,
      autoScrolling: false,
      dragAndMove: 'horizontal',
      dragAndMoveKey: 'c2Fsb25kYW8ueHl6X3RNUVpISmhaMEZ1WkUxdmRtVT05SWY',
      afterSlideLoad: load,
      onSlideLeave: leave,
      afterRender: render,
      controlArrows: false,
    }"
    class=""
  >
    <div class="section">
      <div class="slide" v-for="(image, index) in images" :key="index">
        <img :src="image.fields.file.url" class="w-full cursor-pointer" />
      </div>
    </div>
  </full-page>
</template>
<script>
export default {
  props: ["images"],
  methods: {
    leave() {
      console.log("leave");
    },
    load() {
      console.log("load!");
      document.getElementById("pizza").style.position = "relative";
      document.getElementById("pizza").style.overflow = "scroll";
    },
    render() {
      console.log("render");
      document.getElementById("pizza").style.position = "relative";
    },
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
