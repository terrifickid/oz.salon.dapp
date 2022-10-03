<template>
  <div class="container-fluid px-5">
    <div class="grid grid-cols-12">
      <div class="col-span-3">
        <ManageNav />
      </div>
      <div class="col-span-9">
        <AppProfile :profile="profile" />
      </div>
    </div>
  </div>
</template>
<script>
import ManageNav from "@/components/ManageNav";
import AppProfile from "@/components/AppProfile";
export default {
  components: { AppProfile, ManageNav },
  computed: {
    loaded() {
      return this.profile;
    },
    profile() {
      return this.$store.state.profile;
    },
  },
};
</script>
