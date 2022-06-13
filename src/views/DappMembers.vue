<template>
  <DappShell>
    <ListMembers />
  </DappShell>
</template>

<script>
// @ is an alias to /src
import DappShell from "@/components/DappShell";
import ListMembers from "@/components/ListMembers";
export default {
  components: { DappShell, ListMembers },
};
</script>
