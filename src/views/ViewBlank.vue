<template>
  <AppShell :colors="colors" :isLoaded="true">
    <AppContent class="items-center justify-center font-haffer">
      <div class="text-center">
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
