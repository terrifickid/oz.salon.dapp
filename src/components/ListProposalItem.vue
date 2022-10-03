<template>
  <router-link
    :to="'/manage/' + item.sys.id"
    class="opacity-50 hover:opacity-100"
  >
    <div
      class="grid grid-cols-12 flex items-center gap-x-5"
      :class="{ 'mb-10': !hasPassed, 'mb-5': hasPassed }"
    >
      <div class="col-span-1" :class="{ 'text-green-500': !hasPassed }">
        000
      </div>
      <div
        class="col-span-1 col-start-2"
        :class="{ 'text-green-500': !hasPassed }"
      >
        <b class="capitalize">{{ item.sys.contentType.sys.id }} </b>
      </div>
      <div class="col-start-2 col-span-10 xl:col-span-7">
        <AppCountdown :start="item.sys.createdAt" />
      </div>
      <div class="col-start-2 col-span-10 xl:col-span-2">
        {{ item.fields.profile.firstName }}
        {{ item.fields.profile.lastName }}
      </div>
      <div class="hidden xl:block xl:col-span-1 md:text-right">0% / 0%</div>
    </div>
  </router-link>
</template>
<script>
import _ from "lodash";
import AppCountdown from "@/components/AppCountdown";
export default {
  components: { AppCountdown },
  props: ["item"],
  computed: {
    hasPassed() {
      return typeof _.get(this.item, "fields.votes.passed") == "boolean";
    },
  },
  mounted() {
    console.log();
  },
};
</script>
