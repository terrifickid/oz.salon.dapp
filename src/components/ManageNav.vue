<template>
  <div id="links" class="grid grid-cols-12">
    <div class="col-span-6 md:col-span-12">
      <ul class="mb-10">
        <li><router-link to="/manage/start">Start</router-link></li>
        <li><router-link to="/manage/treasury">Treasury</router-link></li>
        <li>
          <router-link class="flex items-center" to="/manage/proposals">
            <p class="dot inline-block">
              Proposals
              <span
                :class="{ hidden: !activeProposalsCount }"
                class="text-green-500"
              >
                <span style="margin-right: 1px">(</span>{{ activeProposalsCount
                }}<span style="margin-left: 1px">)</span></span
              >
            </p></router-link
          >
        </li>
      </ul>
    </div>
    <div class="col-span-6 md:col-span-12">
      <ul class="mb-10">
        <li><router-link to="/manage/profile">Profile</router-link></li>
        <li>
          <router-link to="/manage/members"
            >Members
            <p class="inline-block" :class="{ hidden: !membersCount }">
              <span style="margin-right: 1px">(</span>{{ membersCount
              }}<span style="margin-left: 1px">)</span>
            </p></router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    activeProposalsCount() {
      return this.$store.getters.activeProposalsCount;
    },
    membersCount() {
      return this.$store.getters.membersCount;
    },
  },
};
</script>
<style scoped>
#links a {
  @apply opacity-50;
}
#links a.router-link-active {
  @apply opacity-100 relative;
}
</style>
