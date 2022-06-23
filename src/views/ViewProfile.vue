<template>
  <AppShell :colors="colors" :isLoaded="loaded" :protected="true">
    <AppContent>
      <div
        class="grid grid-cols-12 w-full pt-32"
        v-if="'walletAddress' in profile"
      >
        <div class="app-frame">
          <p>{{ profile.walletAddress["en-US"] }}</p>
          <p>{{ profile.firstName["en-US"] }}</p>
          <p>{{ profile.lastName["en-US"] }}</p>
        </div>
      </div>
    </AppContent>
  </AppShell>
</template>

<script>
// @ is an alias to /src
import AppShell from "@/components/AppShell";
import AppContent from "@/components/AppContent";
export default {
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
    profile() {
      return this.$store.state.profile;
    },
  },
};
</script>
