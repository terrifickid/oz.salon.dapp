<template>
  <DappShell>
    <template v-if="isNew"><FormKyc /></template>
    <template v-if="!isKycApproved && !isNew"
      ><h1>Your KYC application is being reviewed.</h1></template
    >
    <template v-if="isKycApproved"> <FormApply /> </template
  ></DappShell>
</template>

<script>
// @ is an alias to /src
import DappShell from "@/components/DappShell.vue";
import FormKyc from "@/components/FormKyc.vue";
import FormApply from "@/components/FormApply.vue";
export default {
  name: "DappHome",
  components: { DappShell, FormKyc, FormApply },
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
