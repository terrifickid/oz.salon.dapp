<template>
  <AppShell :isLoaded="true" :protected="true">
    <FormProposal :id="$route.params.id" @ready="ready" />
  </AppShell>
</template>

<script>
// @ is an alias to /src
import AppShell from "@/components/AppShell";

import FormProposal from "@/components/FormProposal";
export default {
  components: { AppShell, FormProposal },
  data() {
    return {
      isReady: false,
    };
  },
  methods: {
    ready() {
      this.isReady = true;
    },
  },
};
</script>
