<template>
  <div
    class="pt-3 px-3 fixed w-screen overflow-scroll bg-white z-50 no-scrollbar"
  >
    <div style="width: 200rem">
      <router-link to="/">
        <AppButton :colors="colors">Home</AppButton>
      </router-link>

      <router-link to="/about">
        <AppButton :colors="colors">About</AppButton></router-link
      >
      <router-link to="/collection">
        <AppButton :colors="colors">Collection</AppButton>
      </router-link>
      <router-link to="/invest">
        <AppButton :colors="colors" href="/#/invest">Invest</AppButton>
      </router-link>
      <router-link to="/transfer">
        <AppButton :colors="colors">Transfer</AppButton>
      </router-link>
      <router-link to="/treasury">
        <AppButton :colors="colors" href="/#/treasury">Treasury</AppButton>
      </router-link>
      <router-link to="/propose">
        <AppButton :colors="colors" href="/#/propose">Propose</AppButton>
      </router-link>
      <router-link to="/collect">
        <AppButton :colors="colors" href="/#/collect">Collect</AppButton>
      </router-link>
      <router-link to="/sell">
        <AppButton :colors="colors" href="/#/sell">Sell</AppButton>
      </router-link>
      <router-link to="/members">
        <AppButton :colors="colors" href="/#/members">Members</AppButton>
      </router-link>
      <router-link to="/profile">
        <AppButton :colors="colors" href="/#/profile">Profile</AppButton>
      </router-link>
      <router-link to="/join">
        <AppButton :colors="colors" href="/#/join">Join</AppButton>
      </router-link>

      <AppButton :colors="colors" @click="disconnect">disconnect</AppButton>
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
