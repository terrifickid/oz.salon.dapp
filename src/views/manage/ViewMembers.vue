<template>
  <div class="container-fluid px-5">
    <div class="grid grid-cols-12">
      <div class="col-span-3">
        <ManageNav />
      </div>
      <div class="col-span-9">
        <div
          v-for="(member, index) in members"
          :key="index"
          class="pb-5 text-left block w-full"
        >
          <div
            class="opacity-50 grid grid-cols-12 gap-5 w-full text-left hover:opacity-100 cursor-pointer"
            :class="{ 'opacity-100': selectedIndex == index }"
            @click="selectedIndex = index"
          >
            <div class="col-span-3">
              {{ member.fields.firstName }} {{ member.fields.lastName }}
            </div>
            <div class="col-span-3">Since {{ member.sys.createdAt }}</div>
            <div class="col-span-3">00 proposals</div>
            <div class="col-span-3">{{ member.fields.emailAddress }}</div>
          </div>
          <div
            class="grid grid-cols-12 gap-5 w-full pt-10 pb-10"
            v-show="selectedIndex == index"
          >
            <div class="col-span-3 opacity-50">Wallet ID</div>

            <div class="col-span-9">
              {{ member.fields.walletAddress }}
            </div>

            <div class="col-span-3 opacity-50">Biography</div>
            <div class="col-span-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div class="col-span-12 opacity-50 hover:opacity-100 pt-4">
              <router-link to="/manage/proposals" class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-3 h-3 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
                View {{ member.fields.firstName }}
                {{ member.fields.lastName }}'s (00) Proposals
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ManageNav from "@/components/ManageNav";
export default {
  components: { ManageNav },
  data() {
    return {
      members: [],
      selectedIndex: null,
    };
  },
  computed: {},
  async mounted() {
    console.log("members load!");
    try {
      const res = await axios.get(process.env.VUE_APP_URI + "/members");
      this.members = res.data;
      console.log(this.members);
    } catch (error) {
      console.log("error", error);
    }
  },
};
</script>
