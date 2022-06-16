<template>
  <DappShell
    :backgroundClass="'bg-canary'"
    :textClass="'text-black'"
    :fillClass="'fill-black'"
  >
    <template v-if="isNew"><TypeformKyc /></template>
    <template v-if="!isKycApproved && !isNew">
      <AppContent>
        <h1 class="text-4xl text-center font-light">
          Your KYC application<br />is being reviewed.
        </h1></AppContent
      >
    </template>
    <template v-if="isKycApproved">
      <AppContent><FormApply /></AppContent></template
  ></DappShell>
</template>

<script>
// @ is an alias to /src
import DappShell from "@/components/DappShell.vue";
import TypeformKyc from "@/components/TypeformKyc.vue";
import FormApply from "@/components/FormApply.vue";
import AppContent from "@/components/AppContent.vue";
export default {
  name: "DappHome",
  components: { DappShell, TypeformKyc, FormApply, AppContent },
  computed: {
    isNew() {
      if ("approved" in this.profile) return false;
      return true;
    },
    isKycApproved() {
      if (this.profile.approved) return this.profile.approved["en-US"];
      return false;
    },
    profile() {
      return this.$store.state.profile;
    },
  },
};
</script>
