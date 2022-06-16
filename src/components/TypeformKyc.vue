<template>
  <div ref="kycform"></div>
</template>
<script>
import { createWidget } from "@typeform/embed";
import "@typeform/embed/build/css/widget.css";
export default {
  mounted() {
    createWidget("T2n1YPSL", { container: this.$refs.kycform });
  },
};
</script>
<style>
iframe {
  @apply fixed pt-12 pb-20;
}
</style>
