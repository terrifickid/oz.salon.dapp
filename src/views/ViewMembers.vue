l
<template>
  <AppShell :colors="colors" :isLoaded="loaded" :protected="true">
    <div
      class="pt-24 text-center w-full absolute z-40 keyboard-off font-haffer"
    >
      <select
        class="text-right p-2 font-bold"
        v-model="filters.lastname"
        v-on:change="filterMembers"
      >
        <option value="">Members</option>
        <option v-for="(m, index) in allMembers" :key="index">
          {{ m.fields.lastName }}
        </option>
      </select>
      <select
        class="text-right p-2 font-bold"
        v-model="filters.orderby"
        v-on:change="filterMembers"
      >
        <option value="">Sort by</option>
        <option>Alphabetical</option>
        <option>Date joined</option>
        <option>Units owned</option>
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
      allMembers: [],
      filters: {
        lastname: "",
        orderby: "",
      },
    };
  },
  computed: {
    loaded() {
      return this.members.length;
    },
  },
  methods: {
    filterMembers() {
      this.members = this.allMembers.slice();

      if (this.filters.lastname !== "") {
        this.members = this.members.filter(
          (member) => member.fields.lastName === this.filters.lastname
        );
      }

      if (this.filters.orderby !== "") {
        switch (this.filters.orderby) {
          case "Alphabetical":
            this.members = this.members.sort((a, b) => {
              const name1 = a.fields.lastName.toUpperCase();
              const name2 = b.fields.lastName.toUpperCase();

              if (name1 < name2) {
                return -1;
              }

              if (name1 > name2) {
                return 1;
              }

              return 0;
            });
            break;

          case "Date joined":
            this.members = this.members.sort((a, b) => {
              const date1 = Date.parse(a.sys.createdAt);
              const date2 = Date.parse(b.sys.createdAt);

              if (date1 > date2) {
                return -1;
              }

              if (date1 < date2) {
                return 1;
              }

              return 0;
            });
            break;

          case "Units owned":
            this.members = this.members.sort((a, b) => {
              if (a.fields.units > b.fields.units) {
                return -1;
              }

              if (a.fields.units < b.fields.units) {
                return 1;
              }

              return 0;
            });
            break;
        }
      }
    },
  },

  async beforeMount() {
    console.log("members load!");
    try {
      const res = await axios.get(
        process.env.VUE_APP_URI + "/members?cache=true"
      );
      this.allMembers = res.data.filter((member) => member.fields.units > 0);
      this.members = res.data.filter((member) => member.fields.units > 0);
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
