<template>
  <div v-if="ready">
    <div class="grid grid-cols-12 w-full font-haffer px-5 pb-48">
      <div class="col-span-12 md:col-span-9 gap-6">
        <template v-if="isNew"><AppForm :url="membersURI" /></template>
        <template v-if="!isKycApproved && !isNew">
          <p class="mb-8">Apply</p>
          <h1 class="opacity-50 font-haffer">
            Your application is currently under review.
          </h1>
        </template>

        <template v-if="isKycApproved && !isApplied">
          <AppForm :url="onboardURI" />
        </template>
        <template v-if="isApplied && !isMember">
          <FormProposal :id="profile.onboardId" />
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
