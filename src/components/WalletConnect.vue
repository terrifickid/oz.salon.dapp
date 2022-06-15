<template>
  <div
    class="flex w-full items-center justify-center"
    :class="{ [textClass]: true, [backgroundClass]: true }"
  >
    <p class="absolute top-0 left-0 text-3xl sm:text-4xl lg:text-5xl p-3">
      Connect wallet<br />
      to continue
    </p>
    <button @click="connect">Connect</button>
    <AppFooter :backgroundClass="backgroundClass" :fillClass="fillClass" />
  </div>
</template>
<script>
import AppFooter from "@/components/AppFooter.vue";
export default {
  props: ["backgroundClass", "textClass", "fillClass"],
  components: {
    AppFooter,
  },
  methods: {
    connect() {
      this.$store.dispatch("connect");
    },
  },
};
</script>
