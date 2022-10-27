<template>
  <AppShell :isLoaded="true" :protected="true">
    <div class="container-fluid px-5">
      <div class="grid grid-cols-12 gap-5">
        <div class="col-span-12 md:col-span-3">
          <ManageNav />
        </div>
        <div class="col-span-12 md:col-span-9">
          <div v-if="!isDone">
            <AppForm :url="uri" @success="isDone = true" />
          </div>
          <AppContent v-show="isDone" class="items-center justify-center">
            <p class="app-text p-3">Your proposal has been submitted.</p>
          </AppContent>
        </div>
      </div>
    </div>
  </AppShell>
</template>

<script>
// @ is an alias to /src
import ManageNav from "@/components/ManageNav";
import AppShell from "@/components/AppShell.vue";
import AppForm from "@/components/AppForm";
import AppContent from "@/components/AppContent";
export default {
  components: { AppShell, AppForm, AppContent, ManageNav },
  data() {
    return {
      isDone: false,
    };
  },
  computed: {
    uri() {
      return process.env.VUE_APP_URI + "/form/invest";
    },
  },
};
</script>
