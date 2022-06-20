<template>
  <DappShell
    :backgroundClass="'bg-white'"
    :textClass="'text-lilac'"
    :fillClass="'fill-lilac'"
    ><AppContent><ListGovernance class="mt-16" /></AppContent
  ></DappShell>
</template>

<script>
// @ is an alias to /src
import DappShell from "@/components/DappShell";
import AppContent from "@/components/AppContent";
import ListGovernance from "@/components/ListGovernance";
export default {
  components: { DappShell, ListGovernance, AppContent },
};
</script>
