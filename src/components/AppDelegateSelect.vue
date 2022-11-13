<template>
  <select
    class="focus:outline-none border-b border-black disabled:border-0 bg-white"
    v-model="selected"
    @change="onChange"
  >
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
  emits: ["delegate"],
  computed: {
    profile() {
      return this.$store.state.profile;
    },
  },
  methods: {
    async onChange() {
      console.log("change");
      this.$emit("delegate", this.selected);
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
