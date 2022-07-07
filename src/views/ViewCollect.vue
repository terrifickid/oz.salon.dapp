<template>
  <AppShell :colors="colors" :isLoaded="true" :protected="true">
    <div v-if="!isDone">
      <AppForm :url="uri" @success="isDone = true" />
    </div>
    <div class="pt-32 px-3" v-show="isDone">
      <p>Thank You</p>
      <p>Invest proposal has been submitted.</p>
    </div>
  </AppShell>
</template>

<script>
// @ is an alias to /src
import AppShell from "@/components/AppShell.vue";
import AppForm from "@/components/AppForm";
export default {
  components: { AppShell, AppForm },
  data() {
    return {
      colors: ["white", "black"],
      isDone: false,
    };
  },
  computed: {
    uri() {
      return process.env.VUE_APP_URI + "/form/collect?cache=true";
    },
  },
};
</script>
