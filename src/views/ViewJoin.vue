<template>
  <AppShell :colors="['canary', 'electric']" isLoaded="loaded">
    <template v-if="isNew"><FormKyc /></template>
    <template v-if="!isKycApproved && !isNew">
      <AppContent class="items-center justify-center">
        <h1 class="text-4xl text-center font-light">
          Your KYC application<br />is being reviewed.
        </h1></AppContent
      >
    </template>
    <template v-if="isKycApproved && !isApplied">
      <AppContent class="items-center justify-center"><FormApply /></AppContent
    ></template>
    <template v-if="isApplied && !isMember"
      ><AppContent class="items-center justify-center"
        ><FormProposal :id="profile.onboard['en-US'].sys.id" /></AppContent
    ></template>
    <template v-if="isMember"
      ><AppContent class="pt-24">
        <div class="grid grid-cols-12 w-full">
          <div class="col-span-10 col-start-2">
            <p class="text-5xl">
              Hello,<br />{{ this.profile.firstName["en-US"] }}
            </p>
          </div>
        </div>
      </AppContent></template
    >
  </AppShell>
</template>

<script>
// @ is an alias to /src
import AppShell from "@/components/AppShell.vue";
import FormKyc from "@/components/FormKyc";
import FormApply from "@/components/FormApply.vue";
import FormProposal from "@/components/FormProposal.vue";
import AppContent from "@/components/AppContent.vue";
export default {
  name: "DappHome",
  components: { AppShell, FormKyc, FormApply, AppContent, FormProposal },
  computed: {
    loaded() {
      return this.profile();
    },
    isNew() {
      if ("approved" in this.profile) return false;
      return true;
    },
    isKycApproved() {
      if (this.profile.approved) return this.profile.approved["en-US"];
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
