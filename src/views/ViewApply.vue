<template>
  <AppShell :colors="colors" :isLoaded="true" :protected="true"> </AppShell>
</template>
<script>
// @ is an alias to /src

import AppShell from "@/components/AppShell";

export default {
  components: { AppShell },
  data() {
    return {
      colors: ["white", "black"],
      members: [],
      allMembers: [],
      artists: [
        "Kennedy Yanko",
        "José Davila",
        "Jean-Baptiste Bernadet",
        "Günther Förg",
        "Mika Tajima",
        "Yoko Ono",
        "Kennedy Yanko",
        "José Davila",
        "Jean-Baptiste Bernadet",
        "Günther Förg",
        "Mika Tajima",
        "Yoko Ono",
      ],
    };
  },
};
</script>
<style scoped>
select {
  border: 0px;
  outline: 0px;
}
</style>
