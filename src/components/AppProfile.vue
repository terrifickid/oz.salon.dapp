<template>
  <div class="font-haffer pb-64">
    <div class="grid grid-cols-12 pb-8">
      <div class="col-span-12">Profile</div>
    </div>

    <div class="grid grid-cols-12 pb-4">
      <div class="col-span-12">Contact</div>
    </div>

    <div class="grid grid-cols-12 pb-4">
      <div class="col-span-6 md:col-span-3 opacity-50">Name</div>
      <div class="col-span-6 md:col-span-3">
        {{ profile.firstName }} {{ profile.lastName }}
      </div>
    </div>

    <div class="grid grid-cols-12">
      <div class="col-span-6 md:col-span-3 opacity-50">Email Address</div>
      <div class="col-span-6 md:col-span-3">
        {{ profile.emailAddress }}
      </div>
    </div>

    <p class="pt-16 pb-4">Delegation</p>
    <div class="grid grid-cols-12">
      <div class="col-span-6 md:col-span-3 opacity-50">Your Delegate</div>
      <div class="col-span-6 md:col-span-3">
        <AppDelegateSelect v-if="profile.walletAddress == this.walletAddress" />
      </div>
    </div>

    <p class="pt-16 pb-4">Financial</p>
    <div class="grid grid-cols-12 pb-4">
      <div class="col-span-12 md:col-span-3 opacity-50">Wallet Address</div>
      <div class="col-span-12 md:col-span-3">
        {{ profile.walletAddress }}
      </div>
    </div>
    <div class="grid grid-cols-12 pb-8">
      <div class="col-span-12 md:col-span-3 opacity-50">Current Units</div>
      <div class="col-span-12 md:col-span-3">
        {{ profile.units }}
      </div>
    </div>

    <router-link to="/manage/proposals" class="pt-16 flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4 mr-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
      View My Proposals
    </router-link>

    <!--    <p class="pt-16 pb-4">Biography</p> -->
  </div>
</template>
<script>
import AppDelegateSelect from "@/components/AppDelegateSelect";
export default {
  components: { AppDelegateSelect },
  props: ["profile"],
  computed: {
    walletAddress() {
      return this.$store.state.walletAddress;
    },
  },
};
</script>
