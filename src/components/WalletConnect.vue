<template>
  <div
    class="flex w-full items-center justify-center"
    :class="{ [textClass]: true, [backgroundClass]: true }"
  >
    <p class="absolute top-0 left-0 text-3xl sm:text-4xl p-3">
      Connect wallet<br />
      to continue
    </p>
    <button
      class="bg-black text-canary rounded px-4 py-3 text-xl shadow-sm op flex items-center"
      @click="connect"
    >
      Connect Wallet
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
        />
      </svg>
    </button>
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
<style>
.op:hover {
  opacity: 0.85;
}
</style>
