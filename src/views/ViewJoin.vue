<template>
  <AppShell :colors="colors" :isLoaded="loaded" :protected="true">
    <AppContent class="items-center justify-center">
      Hello,<br />{{ this.profile.firstName["en-US"] }}
    </AppContent>
  </AppShell>
</template>

<script>
// @ is an alias to /src
import AppShell from "@/components/AppShell.vue";

import AppContent from "@/components/AppContent.vue";
export default {
  name: "DappHome",
  components: { AppShell, AppContent },
  data() {
    return {
      colors: ["white", "black"],
    };
  },
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
