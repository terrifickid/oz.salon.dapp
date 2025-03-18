<template>
  <AppContent class="items-center justify-center">
    <div class="text-center">
      <form @submit.prevent="connect">
        <div :class="shakeClass">
          <input
            type="text"
            placeholder="Username"
            v-model="username"
            class="block w-full p-2 rounded-t-xl border bg-gray-50"
            autocomplete="off"
            required
          />
          <input
            type="password"
            placeholder="Password"
            v-model="password"
            class="block w-full p-2 rounded-b-xl border-b border-l border-r bg-gray-50"
            autocomplete="off"
            required
          />
        </div>
        <p>
          <AppButton class="mt-8 sm:mt-4 mx-auto"
            ><span v-show="!isConnecting">Login</span>

            <svg
              v-show="isConnecting"
              class="w-5 h-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </AppButton>
        </p>
        <div class="mt-4 font-haffer text-xs">
          <p>Existing members may enter their credentials to access Salon.</p>
          <p>Prospective members must fill out an application.</p>
          <p>
            <a href="mailto:hello@salondao.xyz" class="underline"
              >Contact Salon</a
            >
            for troubleshooting.
          </p>
        </div>
      </form>
    </div>
  </AppContent>
</template>
<script>
import AppContent from "@/components/AppContent.vue";
import AppButton from "@/components/AppButton.vue";
import AppLoader from "@/components/AppLoader.vue";
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
    networkError() {
      return this.$store.state.networkError;
    },
    isConnecting() {
      return this.$store.state.connecting;
    },
    shakeClass() {
      return this.networkError ? "animate-shake" : "";
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
