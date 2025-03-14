<template>
  <AppShell :isLoaded="true" :protected="false">
    <div class="pt-20">
      <div class="grid grid-cols-12 w-full font-haffer px-5 pb-48">
        <div class="col-span-12 md:col-span-9 gap-6">
          <AppForm :url="membersURI" />
        </div>
        <div class="hidden md:block md:col-span-3">
          <p class="pb-8">Contact</p>
          <p class="opacity-50 pb-4">Jordan Huelskamp<br /><i>Founder</i></p>
          <p class="opacity-50">hello@salondao.xyz</p>
        </div>
      </div>
    </div>
  </AppShell>
</template>
<script>
// @ is an alias to /src

import AppShell from "@/components/AppShell";
import AppForm from "@/components/AppForm";

export default {
  components: { AppShell, AppForm },
  data() {
    return {};
  },
  computed: {
    membersURI() {
      return process.env.VUE_APP_URI + "/form/members";
    },
  },
};
</script>
<style scoped></style>
