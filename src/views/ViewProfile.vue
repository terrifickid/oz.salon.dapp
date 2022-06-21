<template>
  <AppShell
    :backgroundClass="'bg-orange'"
    :textClass="'text-white'"
    :fillClass="'fill-white'"
  >
    <AppContent>
      <div class="pt-24 text-2xl text-center w-screen">
        <p>{{ profile.walletAddress["en-US"] }}</p>
        <p>{{ profile.firstName["en-US"] }}</p>
        <p>{{ profile.lastName["en-US"] }}</p>
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
  computed: {
    profile() {
      return this.$store.state.profile;
    },
  },
};
</script>
