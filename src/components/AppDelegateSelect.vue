<template>
  <select class="focus:outline-none" v-model="selected" @change="onChange">
    <option value="0">No Delegate</option>
    <option
      v-for="(m, index) in members"
      :key="index"
      :value="m.fields.walletAddress"
    >
      {{ m.fields.firstName }} {{ m.fields.lastName }}
    </option>
  </select>
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
  computed: {
    profile() {
      return this.$store.state.profile;
    },
  },
  methods: {
    async onChange() {
      try {
        const res = await axios.post(
          process.env.VUE_APP_URI +
            "/delegate/" +
            this.profile.id +
            "/" +
            this.selected
        );
        console.log(res);
      } catch (e) {
        console.error(e);
      }
    },
  },
  async beforeMount() {
    this.selected = _.get(this.profile, "delegate");
    console.log("members load!");
    try {
      const res = await axios.get(
        process.env.VUE_APP_URI + "/members?cache=true"
      );
      this.members = res.data;
      console.log(this.members);
    } catch (error) {
      console.log("error", error);
    }
  },
};
</script>
