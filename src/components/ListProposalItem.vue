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
        <span :class="{ dot: !hasPassed }">{{ lpad }}</span>
      </div>
      <div
        class="col-span-1 col-start-2"
        :class="{ 'text-green-500': !hasPassed }"
      >
        <b class="capitalize">{{ item.sys.contentType.sys.id }} </b>
      </div>
      <div class="col-start-2 col-span-10 xl:col-span-7">
        <AppCountdown
          v-if="hasPassed"
          :start="0"
          :type="item.sys.contentType.sys.id"
        />
        <AppCountdown
          v-else
          :start="item.sys.createdAt"
          :type="item.sys.contentType.sys.id"
        />
      </div>
      <div class="col-start-2 col-span-10 xl:col-span-2 truncate">
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
    lpad() {
      var zeroes = new Array(3 + 1).join("0");
      return (zeroes + this.item.sys.id.replace(/\D/g, "")).slice(-3);
    },
    hasPassed() {
      return typeof _.get(this.item, "fields.votes.passed") == "boolean";
    },
  },
  mounted() {
    console.log();
  },
};
</script>
