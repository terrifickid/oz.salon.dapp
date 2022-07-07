<template>
  <AppShell :colors="colors" :isLoaded="loaded" :protected="true">
    <div
      class="pt-24 text-center w-full absolute z-40 keyboard-off font-haffer"
    >
      <select class="text-right alpha p-2 font-bold">
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
        <option>E</option>
        <option>F</option>
        <option>G</option>
        <option>H</option>
        <option>I</option>
        <option>J</option>
        <option>K</option>
        <option>L</option>
        <option>M</option>
        <option>N</option>
        <option>O</option>
        <option>P</option>
        <option>Q</option>
        <option>R</option>
        <option>S</option>
        <option>T</option>
        <option>U</option>
        <option>V</option>
        <option>W</option>
        <option>X</option>
        <option>Y</option>
        <option>Z</option>
      </select>
      <select class="text-right p-2 font-bold">
        <option v-for="(m, index) in members" :key="index">
          {{ m.fields.lastName }}
        </option>
      </select>
      <select class="text-right p-2 font-bold">
        <option>Most Votes</option>
        <option>Newest</option>
      </select>
    </div>
    <AppFullpage>
      <div v-for="(profile, index) in members" :key="index" class="section">
        <div class="grid grid-cols-12 w-full pt-32 font-haffer px-3">
          <div class="app-frame">
            <AppProfile :profile="profile.fields" />
          </div>
        </div>
      </div>
    </AppFullpage>
  </AppShell>
</template>
<script>
// @ is an alias to /src
import axios from "axios";
import AppShell from "@/components/AppShell";
import AppFullpage from "@/components/AppFullpage";
import AppProfile from "@/components/AppProfile";
export default {
  components: { AppFullpage, AppShell, AppProfile },
  data() {
    return {
      colors: ["white", "black"],
      members: [],
    };
  },
  computed: {
    loaded() {
      return this.members.length;
    },
  },
  async beforeMount() {
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
<style scoped>
select {
  border: 0px;
  outline: 0px;
}
</style>
