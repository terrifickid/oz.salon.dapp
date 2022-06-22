<template>
  <AppShell :colors="colors" :isLoaded="loaded">
    <AppContent class="items-center justify-center"
      ><ListMembers :members="members"
    /></AppContent>
  </AppShell>
</template>

<script>
// @ is an alias to /src
import AppShell from "@/components/AppShell";
import AppContent from "@/components/AppContent";
import ListMembers from "@/components/ListMembers";
import axios from "axios";
export default {
  components: { AppShell, ListMembers, AppContent },
  data() {
    return {
      colors: ["white", "black"],
      members: [],
    };
  },
  computed: {
    loaded() {
      if (this.members.length) return true;
      return false;
    },
  },
  async beforeMount() {
    try {
      const res = await axios.get(
        "https://salontest-terrifickid.cloud.okteto.net/members"
      );
      this.members = res.data;
    } catch (error) {
      console.log("error", error);
    }
  },
};
</script>
