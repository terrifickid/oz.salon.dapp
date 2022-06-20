<template>
  <DappShell
    :backgroundClass="'bg-silver'"
    :textClass="'text-white'"
    :fillClass="'fill-white'"
  >
    <AppContent class="items-center justify-center"><ListMembers /></AppContent>
  </DappShell>
</template>

<script>
// @ is an alias to /src
import DappShell from "@/components/DappShell";
import AppContent from "@/components/AppContent";
import ListMembers from "@/components/ListMembers";
export default {
  components: { DappShell, ListMembers, AppContent },
};
</script>
