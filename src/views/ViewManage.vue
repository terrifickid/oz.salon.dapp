<template>
  <AppShell :isLoaded="true" :protected="true">
    <div class="pt-20 pb-48">
      <router-view></router-view>
    </div>
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
  computed: {},
  methods: {},
  mounted() {},
};
</script>
