<template>
  <AppShell
    :backgroundClass="'bg-white'"
    :textClass="'text-lilac'"
    :fillClass="'fill-lilac'"
    ><AppContent><ListGovernance class="mt-16" /></AppContent
  ></AppShell>
</template>

<script>
// @ is an alias to /src
import AppShell from "@/components/AppShell";
import AppContent from "@/components/AppContent";
import ListGovernance from "@/components/ListGovernance";
export default {
  components: { AppShell, ListGovernance, AppContent },
};
</script>
