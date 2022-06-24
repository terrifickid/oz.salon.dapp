<template>
  <AppShell :colors="colors" :isLoaded="loaded" :protected="true">
    <AppContent>
      <div
        class="grid grid-cols-12 w-full pt-32 font-ak"
        v-if="'walletAddress' in profile"
      >
        <div class="app-frame">
          <p class="border-b border-black p-1 text-right">
            {{ profile.walletAddress["en-US"] }}
          </p>
          <p class="border-b border-black p-1">
            {{ profile.firstName["en-US"] }}
          </p>
          <p class="border-b border-black p-1">
            {{ profile.lastName["en-US"] }}
          </p>
          <p class="border-b border-black p-1 text-right">
            {{ profile.emailAddress["en-US"] }}
          </p>
          <p class="border-b border-black p-1 text-left">
            {{ profile.units["en-US"] }}
          </p>
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
