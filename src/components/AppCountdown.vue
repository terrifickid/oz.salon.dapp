<template>
  <vue-countdown :time="this.time" v-slot="{ days, hours, minutes, seconds }">
    <span class="opacity-50">Time Remaining:</span><br class="md:hidden" />
    {{ days }} days, {{ hours }} hours, {{ minutes }} minutes,
    {{ seconds }} seconds.
  </vue-countdown>
</template>
<script>
export default {
  props: ["start", "type"],
  computed: {
    startDate() {
      return new Date(this.start);
    },
    time() {
      var days;
      switch (this.type) {
        case "exchange":
          days = 16;
          break;
        default:
          days = 4;
          break;
      }
      var now = new Date();
      var timePassedMs = now.getTime() - this.startDate.getTime();
      var DaysMs = 86400000 * days;
      var r = DaysMs - timePassedMs;
      if (r < 0) return 0;
      return r;
    },
  },
};
</script>
