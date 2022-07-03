<template>
  <div class="text-xs">
    <vue-countdown :time="this.time" v-slot="{ days, hours, minutes, seconds }">
      Time Remaining：{{ days }} days, {{ hours }} hours, {{ minutes }} minutes,
      {{ seconds }} seconds.
    </vue-countdown>
  </div>
</template>
<script>
export default {
  props: ["start"],
  computed: {
    startDate() {
      return new Date(this.start);
    },
    endDate() {
      const end = new Date();
      end.setDate(this.startDate.getDate() + 4);
      return end;
    },
    time() {
      var now = new Date();
      return this.endDate.getTime() - now.getTime();
    },
  },
};
</script>
