<template>
  <div>
    <p v-for="(d, index) in s" :key="index">
      {{ d.fields.firstName }} {{ d.fields.lastName }}
    </p>
    <p v-if="!s.length">&mdash;</p>
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
  emits: [""],
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    s() {
      var d = [];
      //
      this.members.forEach((m) => {
        if (m.fields. == this.profile.walletAddress) d.push(m);
      });
      return d;
    },
  },
  methods: {},
  async beforeMount() {
    this.selected = _.get(this.profile, "");
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
