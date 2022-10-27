<template>
  <AppShell :isLoaded="true" :isProtected="true" class="pt-20">
    <router-view></router-view>
  </AppShell>
</template>

<script>
// @ is an alias to /src
import AppShell from "@/components/AppShell";
export default {
  components: { AppShell },
  data() {
    return {};
  },
};
</script>
