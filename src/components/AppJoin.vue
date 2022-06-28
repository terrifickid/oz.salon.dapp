<template>
  <template v-if="isNew"><FormKyc /></template>
  <template v-if="!isKycApproved && !isNew">
    <AppContent class="items-center justify-center">
      <h1 class="app-text text-center font-haffer">
        Your KYC application is under review.
      </h1>
    </AppContent>
  </template>

  <template v-if="isKycApproved && !isApplied"><FormApply /></template>
  <template v-if="isApplied && !isMember"
    ><FormProposal :id="profile.onboard['en-US'].sys.id" />></template
  >
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
      return true;
    },
    isKycApproved() {
      if (this.profile.kycApproved) return this.profile.kycApproved["en-US"];
      return false;
    },
    isApplied() {
      if ("onboard" in this.profile) {
        if (this.profile.onboard["en-US"]) return true;
      }
      return false;
    },
    isMember() {
      if ("salonUnits" in this.profile) {
        return this.profile.salonUnits["en-US"];
      }
      return false;
    },
    profile() {
      return this.$store.state.profile;
    },
  },
};
</script>
