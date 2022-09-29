<template>
  <AppShell :colors="colors" :isLoaded="true" :isProtected="true" class="pt-20">
    <div class="container-fluid px-5">
      <div class="grid grid-cols-12">
        <div class="col-span-3">
          <ManageNav />
        </div>
        <div class="col-span-12">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </AppShell>
</template>

<script>
// @ is an alias to /src
import AppShell from "@/components/AppShell";
import ManageNav from "@/components/ManageNav";
export default {
  components: { AppShell, ManageNav },
  data() {
    return {};
  },
};
</script>
