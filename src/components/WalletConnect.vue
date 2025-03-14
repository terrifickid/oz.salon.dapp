<template>
  <AppContent class="items-center justify-center">
    <div class="text-center">
      <form @submit.prevent="connect">
        <div :class="shakeClass">
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
        </div>
        <p>
          <AppButton class="mt-8 sm:mt-4 mx-auto"
            ><span v-if="!isConnecting">Login</span>

            <svg
              v-if="isConnecting"
              class="size-5 animate-spin"
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
        <p class="mt-4 font-haffer text-xs">
          Please enter credentials to access Salon.
        </p>
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

.lds-spinner,
.lds-spinner div,
.lds-spinner div:after {
  box-sizing: border-box;
}
.lds-spinner {
  color: currentColor;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-spinner div {
  transform-origin: 40px 40px;
  animation: lds-spinner 1.2s linear infinite;
}
.lds-spinner div:after {
  content: " ";
  display: block;
  position: absolute;
  top: 3.2px;
  left: 36.8px;
  width: 6.4px;
  height: 17.6px;
  border-radius: 20%;
  background: currentColor;
}
.lds-spinner div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -1.1s;
}
.lds-spinner div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -1s;
}
.lds-spinner div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.9s;
}
.lds-spinner div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.8s;
}
.lds-spinner div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.7s;
}
.lds-spinner div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.6s;
}
.lds-spinner div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.5s;
}
.lds-spinner div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.4s;
}
.lds-spinner div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.3s;
}
.lds-spinner div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.2s;
}
.lds-spinner div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.1s;
}
.lds-spinner div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
}
@keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
