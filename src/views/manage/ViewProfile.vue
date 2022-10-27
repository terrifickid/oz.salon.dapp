<template>
  <div class="container-fluid px-5">
    <div class="grid grid-cols-12">
      <div class="col-span-12 md:col-span-3">
        <div class="md:fixed">
          <ManageNav />
        </div>
      </div>
      <div class="col-span-12 md:col-span-9">
        <AppProfile v-if="profile.firstName" :profile="profile" />
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
      return this.profile.firstName;
    },
    profile() {
      return this.$store.state.profile;
    },
  },
};
</script>
