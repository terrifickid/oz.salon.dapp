<template>
  <div v-if="ready">
    <div class="grid grid-cols-12 w-full font-haffer px-6">
      <div class="col-span-12 md:col-span-9">
        <template v-if="isNew"><AppForm :url="membersURI" /></template>
        <template v-if="!isKycApproved && !isNew">
          <p class="text-2xl mb-8 text-green-500">Apply</p>
          <h1 class="text-2xl opacity-50 font-haffer">
            Your application is currently under review. We will notify you when
            you are approved to move to the second stage of our application
            process.
          </h1>
        </template>

        <template v-if="isKycApproved && !isApplied">
          <div class="px-6">
            <AppForm :url="onboardURI" />
          </div>
        </template>
        <template v-if="isApplied && !isMember">
          <div class="p-6"><FormProposal :id="profile.onboardId" /></div>
        </template>
      </div>
      <div class="hidden md:block md:col-span-3">
        <p class="pb-8">Contact</p>
        <p class="opacity-50 pb-4">Jordan Huelskamp<br /><i>Founder</i></p>
        <p class="opacity-50">hello@salondao.xyz</p>
      </div>
    </div>
  </div>
</template>
<script>
import AppForm from "@/components/AppForm";
import FormProposal from "@/components/FormProposal.vue";

export default {
  components: { AppForm, FormProposal },
  computed: {
    loaded() {
      return this.profile;
    },
    isNew() {
      if ("kycApproved" in this.profile) return false;
      if ("loading" in this.profile) return false;
      return true;
    },
    isKycApproved() {
      if (this.profile.kycApproved) return this.profile.kycApproved;
      return false;
    },
    isApplied() {
      if ("onboardId" in this.profile) return true;
      return false;
    },
    isMember() {
      if ("salonUnits" in this.profile) {
        return this.profile.salonUnits;
      }
      return false;
    },
    profile() {
      return this.$store.state.profile;
    },
    ready() {
      if (!("loading" in this.profile)) return true;
      return false;
    },
    membersURI() {
      return process.env.VUE_APP_URI + "/form/members";
    },
    onboardURI() {
      return process.env.VUE_APP_URI + "/form/onboard";
    },
  },
};
</script>
