<template>
  <vue-countdown :time="this.time" v-slot="{ days, hours, minutes, seconds }">
    <span class="opacity-50">Time Remaining:</span><br class="md:hidden" />
    {{ days }} days, {{ hours }} hours, {{ minutes }} minutes,
    {{ seconds }} seconds.
  </vue-countdown>
</template>
<script>
export default {
  props: ["start"],
  computed: {
    startDate() {
      return new Date(this.start);
    },
    time() {
      var now = new Date();
      var timePassedMs = now.getTime() - this.startDate.getTime();
      var fourDaysMs = 86400000 * 4;
      var r = fourDaysMs - timePassedMs;
      if (r < 0) return 0;
      return r;
    },
  },
};
</script>
