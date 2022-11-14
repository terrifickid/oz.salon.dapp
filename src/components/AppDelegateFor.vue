<template>
  <div>
    <p v-for="(d, index) in delegates" :key="index">
      {{ d.fields.firstName }} {{ d.fields.lastName }}
    </p>
    <p v-if="!delegates.length">--</p>
  </div>
</template>
<script>
import _ from "lodash";
import axios from "axios";
export default {
  data() {
    return {
      selected: "",
      members: [],
    };
  },
  emits: ["delegate"],
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    delegates() {
      var d = [];
      //
      this.members.forEach((m) => {
        if (m.fields.delegate == this.profile.walletAddress) d.push(m);
      });
      return d;
    },
  },
  methods: {},
  async beforeMount() {
    this.selected = _.get(this.profile, "delegate");
    console.log("members load!");
    try {
      const res = await axios.get(
        process.env.VUE_APP_URI + "/members?cache=true"
      );
      this.members = res.data;
    } catch (error) {
      console.log("error", error);
    }
  },
};
</script>
<style scoped>
select:disabled {
  appearance: none;
}
</style>
