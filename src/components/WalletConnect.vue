<template>
  <AppContent class="items-center justify-center" v-if="!isConnected">
    <div class="text-center">
      <form @submit="connect">
        <input
          type="text"
          placeholder="username"
          v-model="username"
          class="block w-full p-2 rounded-t-xl border bg-gray-50"
          autocomplete="off"
          required
        />
        <input
          type="password"
          placeholder="password"
          v-model="password"
          class="block w-full p-2 rounded-b-xl border-b border-l border-r bg-gray-50"
          autocomplete="off"
          required
        />
        <p class="">
          <AppButton class="mt-8 sm:mt-4 mx-auto"> Login </AppButton>
        </p>
        <p class="mt-4 font-haffer text-xs">
          Please enter credentials to access Salon.
        </p>
        <p>{{ login }}</p>
      </form>
    </div>
  </AppContent>
</template>
<script>
import AppContent from "@/components/AppContent.vue";
import AppButton from "@/components/AppButton.vue";
export default {
  components: { AppButton, AppContent },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    login() {
      return this.$store.state.login;
    },
    isMetaMaskBrowser() {
      if (/MetaMaskMobile/i.test(navigator.userAgent)) {
        return true;
      } else {
        return false;
      }
    },
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    connect() {
      this.$store.dispatch("connect", {
        username: this.username,
        password: this.password,
      });
    },
  },
  async beforeMount() {},
};
</script>
<style>
.op:hover {
  opacity: 0.85;
}
/* Remove autofill blue background (works in Webkit browsers like Chrome/Safari) */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 1000px white inset !important; /* Forces background to white */
  box-shadow: 0 0 0 1000px white inset !important; /* Standard syntax */
  -webkit-text-fill-color: black !important; /* Ensures text color stays readable */
}
</style>
