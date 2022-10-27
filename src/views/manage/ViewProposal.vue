<template>
  <div class="container-fluid px-5">
    <div class="grid grid-cols-12">
      <div class="col-span-12 md:col-span-3">
        <ManageNav />
        <div class="hidden md:block">
          <span class="opacity-50">Filters</span>
          <ul>
            <router-link to="/manage/proposals">
              <li>All</li>
            </router-link>
            <router-link to="/manage/proposals">
              <li class="opacity-50">Pending</li>
            </router-link>
            <router-link to="/manage/proposals">
              <li class="opacity-50">Voted</li>
            </router-link>
            <router-link to="/manage/proposals">
              <li class="opacity-50">Closed</li>
            </router-link>
            <router-link to="/manage/proposals">
              <li class="opacity-50">My Proposals</li>
            </router-link>
          </ul>
        </div>
      </div>
      <div class="col-span-12 md:col-span-9">
        <FormProposal :id="$route.params.id" />
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
//import _ from "lodash";

import ManageNav from "@/components/ManageNav";
import FormProposal from "@/components/FormProposal";

export default {
  components: {
    ManageNav,
    FormProposal,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
select {
  border: 0px;
  outline: 0px;
}
</style>
