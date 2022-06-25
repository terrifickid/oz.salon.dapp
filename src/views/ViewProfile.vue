<template>
  <AppShell :colors="colors" :isLoaded="loaded" :protected="true">
    <AppContent class="items-center">
      <div
        class="grid grid-cols-12 w-full pt-32 font-haffer"
        v-if="'walletAddress' in profile"
      >
        <div class="app-frame">
          <AppProfile :profile="profile" />
        </div>
      </div>
    </AppContent>
  </AppShell>
</template>

<script>
// @ is an alias to /src
import AppShell from "@/components/AppShell";
import AppContent from "@/components/AppContent";
import AppProfile from "@/components/AppProfile";
export default {
  components: { AppShell, AppContent, AppProfile },
  data() {
    return {
      colors: ["white", "black"],
    };
  },
  computed: {
    loaded() {
      return this.profile;
    },
    profile() {
      return this.$store.state.profile;
    },
  },
};
</script>
