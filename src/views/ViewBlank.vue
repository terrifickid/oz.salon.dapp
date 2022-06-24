<template>
  <AppShell :colors="colors" :isLoaded="true">
    <AppContent class="items-center justify-center font-mono">
      <div class="text-center">
        <p class="text-5xl mb-3">404</p>
        <p>Page not found</p>
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
};
</script>
