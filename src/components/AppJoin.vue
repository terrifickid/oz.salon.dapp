<template>
  <div v-if="ready">
    <template v-if="isNew"><FormKyc /></template>
    <template v-if="!isKycApproved && !isNew">
      <AppContent class="items-center justify-center">
        <h1 class="app-text text-center font-haffer">
          Your application is under review.
        </h1>
      </AppContent>
    </template>

    <template v-if="isKycApproved && !isApplied"> <FormApply /></template>
    <template v-if="isApplied && !isMember">
      <FormProposal :id="profile.onboardProposal.sys.id"
    /></template>
  </div>
</template>
<script>
import AppContent from "@/components/AppContent";
import FormKyc from "@/components/FormKyc";
import FormApply from "@/components/FormApply.vue";
import FormProposal from "@/components/FormProposal.vue";

export default {
  components: { AppContent, FormKyc, FormApply, FormProposal },
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
      if ("onboardProposal" in this.profile) {
        if (this.profile.onboardProposal) return true;
      }
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
  },
};
</script>
