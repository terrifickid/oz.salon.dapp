<template>
  <full-page ref="fullpage" :options="options" class="pr-16">
    <slot></slot>
  </full-page>
</template>
<script>
export default {
  data() {
    return {
      options: {
        licenseKey: "K9EP6-N164H-2BKM8-MJLGI-KSURM",
        controlArrows: true,
        scrollBar: false,
        scrollingSpeed: 500,
        navigation: true,
        navigationPosition: "right",
      },
    };
  },
  methods: {
    async next() {
      this.$refs.fullpage.api.moveSectionDown();
    },
  },
};
</script>
<style>
.fullpage-wrapper {
  padding-right: 0 !important;
}
</style>
