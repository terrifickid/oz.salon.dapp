<template>
  <div class="container-fluid px-5">
    <div class="grid grid-cols-12 gap-5">
      <div class="col-span-12 md:col-span-3">
        <div class="md:fixed">
          <ManageNav />
        </div>
      </div>
      <div class="col-span-12 md:col-span-9">
        <ul>
          <li class="mb-5">
            <router-link to="/manage/acquire">
              <p>Acquire</p>
              <p class="opacity-50">-> Propose a work for Salon to collect</p>
            </router-link>
          </li>
          <li class="mb-5">
            <router-link to="/manage/propose">
              <p>Propose</p>
              <p class="opacity-50">-> Initiate a vote on a proposal</p>
            </router-link>
          </li>
          <li class="mb-5">
            <router-link to="/manage/invest">
              <p>Invest</p>
              <p class="opacity-50">-> Add to your existing investment</p>
            </router-link>
          </li>
          <li class="mb-5">
            <router-link to="/manage/exchange">
              <p>Exchange</p>
              <p class="opacity-50">-> Cash out some or all of your units</p>
            </router-link>
          </li>
          <li class="mb-5">
            <router-link to="/manage/sell">
              <p>Sell</p>
              <p class="opacity-50">
                -> Initiate a vote to sell a work from our collection
              </p>
            </router-link>
          </li>
          <li v-if="isAdmin" class="mb-5">
            <router-link to="/manage/kick">
              <p>Kick</p>
              <p class="opacity-50">-> Initiate a vote to kick</p>
            </router-link>
          </li>
          <li class="mt-12 mb-5">
            <router-link to="/manage/proposals">
              <p class="text-green-500">-> View Proposals</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import _ from "lodash";
import ManageNav from "@/components/ManageNav";
export default {
  components: { ManageNav },
  data() {
    return {};
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    isAdmin() {
      var role = _.get(this.profile, "role");
      if (role == "Admin") return true;
      return false;
    },
  },
};
</script>
