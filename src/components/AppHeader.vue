<template>
  <div
    class="pt-3 px-3 fixed w-screen overflow-scroll bg-white z-50 no-scrollbar"
  >
    <div style="width: 200rem">
      <router-link to="/">
        <AppButton :colors="colors" class="mr-2">Home</AppButton>
      </router-link>

      <router-link to="/about">
        <AppButton :colors="colors" class="mr-2">About</AppButton></router-link
      >
      <router-link to="/collection">
        <AppButton :colors="colors" class="mr-2">Collection</AppButton>
      </router-link>
      <router-link to="/invest">
        <AppButton :colors="colors" class="mr-2">Invest</AppButton>
      </router-link>
      <router-link to="/transfer">
        <AppButton :colors="colors" class="mr-2">Transfer</AppButton>
      </router-link>
      <router-link to="/treasury">
        <AppButton :colors="colors" class="mr-2">Treasury</AppButton>
      </router-link>
      <router-link to="/propose">
        <AppButton :colors="colors" class="mr-2">Propose</AppButton>
      </router-link>
      <router-link to="/collect">
        <AppButton :colors="colors" class="mr-2">Collect</AppButton>
      </router-link>
      <router-link to="/sell">
        <AppButton :colors="colors" class="mr-2">Sell</AppButton>
      </router-link>
      <router-link to="/members">
        <AppButton :colors="colors" class="mr-2">Members</AppButton>
      </router-link>
      <router-link to="/profile">
        <AppButton :colors="colors" class="mr-2">Profile</AppButton>
      </router-link>
      <router-link to="/join">
        <AppButton :colors="colors" class="mr-2">Join</AppButton>
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
