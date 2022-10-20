<template>
  <AppShell :colors="colors" :isLoaded="true" :protected="true">
    <div v-if="!isDone">
      <AppForm :url="uri" @success="isDone = true" />
    </div>
    <AppContent v-show="isDone" class="items-center justify-center">
      <p class="app-text p-3">Your proposal has been submitted.</p>
    </AppContent>
  </AppShell>
</template>

<script>
// @ is an alias to /src
import AppShell from "@/components/AppShell.vue";
import AppForm from "@/components/AppForm";
import AppContent from "@/components/AppContent";
export default {
  components: { AppShell, AppForm, AppContent },
  data() {
    return {
      colors: ["white", "black"],
      isDone: false,
    };
  },
  computed: {
    uri() {
      return process.env.VUE_APP_URI + "/form/acquire";
    },
  },
};
</script>
