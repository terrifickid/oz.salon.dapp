<template>
  <AppShell
    :backgroundClass="'bg-silver'"
    :textClass="'text-white'"
    :fillClass="'fill-white'"
  >
    <AppContent class="items-center justify-center"><ListMembers /></AppContent>
  </AppShell>
</template>

<script>
// @ is an alias to /src
import AppShell from "@/components/AppShell";
import AppContent from "@/components/AppContent";
import ListMembers from "@/components/ListMembers";
export default {
  components: { AppShell, ListMembers, AppContent },
};
</script>
