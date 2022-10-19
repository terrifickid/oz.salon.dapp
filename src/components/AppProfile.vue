<template>
  <div class="font-haffer pb-64">
    <div class="grid grid-cols-12 pb-8">
      <div class="col-span-12">
        Profile
        <button
          class="ml-2 opacity-50"
          @click="editMode = true"
          v-show="!editMode"
        >
          Edit
        </button>
        <button
          class="ml-2 opacity-50"
          @click="editMode = false"
          v-show="editMode"
        >
          Cancel
        </button>
      </div>
    </div>

    <div class="grid grid-cols-12 pb-3">
      <div class="col-span-12">Contact</div>
    </div>

    <div class="grid grid-cols-12">
      <div class="col-span-6 md:col-span-3 opacity-50">Name</div>
      <div class="col-span-6 md:col-span-3 flex">
        <template v-if="!editMode">
          <p class="border-b border-transparent pb-1 mb-2">
            {{ profile.firstName }} {{ profile.lastName }}
          </p>
        </template>
        <template v-else>
          <input
            class="font-haffer bg-transparent block border-b border-black w-full text-black outline-none placeholder-opb pb-1 mb-2"
            v-model="update.firstName"
          />
          <input
            class="font-haffer bg-transparent block border-b border-black w-full text-black outline-none placeholder-opb pb-1 mb-2 ml-5"
            v-model="update.lastName"
          />
        </template>
      </div>
    </div>

    <div class="grid grid-cols-12">
      <div class="col-span-6 md:col-span-3 opacity-50">Email Address</div>
      <div class="col-span-6 md:col-span-3">
        <template v-if="!editMode">
          <p class="border-b border-transparent pb-1 mb-2">
            {{ profile.emailAddress }}
          </p>
        </template>
        <template v-else>
          <input
            class="font-haffer bg-transparent block border-b border-black w-full text-black outline-none placeholder-opb pb-1 mb-2"
            v-model="update.emailAddress"
          />
        </template>
      </div>
    </div>

    <p class="pt-12 pb-3">Delegation</p>
    <div class="grid grid-cols-12 pb-3">
      <div class="col-span-6 md:col-span-3 opacity-50">Your Delegate</div>
      <div class="col-span-6 md:col-span-3">
        <AppDelegateSelect @delegate="updateDelegate" :disabled="!editMode" />
      </div>
    </div>
    <div class="grid grid-cols-12">
      <div class="col-span-6 md:col-span-3 opacity-50">Delagating For</div>
      <div class="col-span-6 md:col-span-3"></div>
    </div>

    <p class="pt-12 pb-4">Financial</p>
    <div class="grid grid-cols-12 pb-3">
      <div class="col-span-12 md:col-span-3 opacity-50">Wallet Address</div>
      <div class="col-span-12 md:col-span-3">
        {{ profile.walletAddress }}
      </div>
    </div>
    <div class="grid grid-cols-12">
      <div class="col-span-12 md:col-span-3 opacity-50">Current Units</div>
      <div class="col-span-12 md:col-span-3">
        {{ profile.units }}
      </div>
    </div>

    <div class="grid grid-cols-12 pt-12">
      <div class="col-span-12 md:col-span-3">Biography</div>
      <div class="col-span-12 md:col-span-6">
        <template v-if="!editMode">
          <p class="border-b border-transparent p-1 mb-2">
            {{ profile.biography }}
          </p>
        </template>
        <template v-else>
          <textarea
            class="font-haffer bg-transparent block border border-black w-full text-black outline-none placeholder-opb p-2 mb-2 w-full"
            v-model="update.biography"
          />
        </template>
      </div>
    </div>

    <router-link
      to="/manage/proposals"
      class="pt-16 flex items-center"
      v-show="!editMode"
    >
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

    <div v-show="editMode" class="pt-12">
      <AppButton @click="updateProfile">Save Changes</AppButton>
      <button class="px-4 py-2 bg-white" @click="editMode = false">
        Cancel
      </button>
    </div>
    <!--    <p class="pt-16 pb-4">Biography</p> -->
  </div>
</template>
<script>
import axios from "axios";
import AppDelegateSelect from "@/components/AppDelegateSelect";
import AppButton from "@/components/AppButton";
export default {
  components: { AppDelegateSelect, AppButton },
  props: ["profile"],
  data() {
    return {
      update: {},
      editMode: false,
    };
  },
  computed: {
    walletAddress() {
      return this.$store.state.walletAddress;
    },
  },
  methods: {
    async updateProfile() {
      try {
        const res = await axios.post(
          process.env.VUE_APP_URI + "/profile/" + this.profile.id,
          this.update
        );
        console.log(res);
      } catch (e) {
        console.error(e);
      }
      this.editMode = false;
    },
    updateDelegate(d) {
      this.update.delegate = d;
    },
  },
  mounted() {
    this.update.firstName = this.profile.firstName;
    this.update.lastName = this.profile.lastName;
    this.update.emailAddress = this.profile.emailAddress;
    this.update.biography = this.profile.biography;
    this.update.delegate = this.profile.delegate;
  },
};
</script>
