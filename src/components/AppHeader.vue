<template>
  <div class="p-3 absolute w-screen h-20 overflow-scroll bg-white z-50">
    <div style="width: 200rem; height: 1px">
      <AppButton :colors="colors" @click="toggleDown" href="/#">Home</AppButton>
      <AppButton :colors="colors" @click="toggleDown" href="/#/about"
        >About</AppButton
      >
      <AppButton :colors="colors" @click="toggleDown" href="/#/collection"
        >Collection</AppButton
      >

      <AppButton :colors="colors" @click="toggleDown" href="/#/invest"
        >Invest</AppButton
      >
      <AppButton :colors="colors" @click="toggleDown" href="/#/transfer"
        >Transfer</AppButton
      >
      <AppButton :colors="colors" @click="toggleDown" href="/#/treasury"
        >Treasury</AppButton
      >

      <AppButton :colors="colors" @click="toggleDown" href="/#/propose"
        >Propose</AppButton
      >
      <AppButton :colors="colors" @click="toggleDown" href="/#/collection"
        >Collect</AppButton
      >
      <AppButton :colors="colors" @click="toggleDown" href="/#/sell"
        >Sell</AppButton
      >

      <AppButton :colors="colors" @click="toggleDown" href="/#/members"
        >Members</AppButton
      >
      <AppButton :colors="colors" @click="toggleDown" href="/#/profile"
        >Profile</AppButton
      >
      <AppButton :colors="colors" @click="toggleDown" href="/#/join"
        >Join</AppButton
      >
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
export default {
  components: { AppButton },
  props: ["colors"],
  data() {
    return {
      toggle: false,
    };
  },
  computed: {
    display() {
      return this.colors?.length;
    },
    walletAddress() {
      return this.$store.state.walletAddress;
    },
  },
  methods: {
    toggleDown() {
      this.toggle = false;
    },
    connect() {
      this.$store.dispatch("connect");
    },
    disconnect() {
      this.$store.dispatch("disconnect");
    },
  },
};
</script>
