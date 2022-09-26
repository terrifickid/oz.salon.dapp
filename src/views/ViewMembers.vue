<template>
  <AppShell
    :colors="colors"
    :isLoaded="loaded"
    :protected="false"
    class="pb-64"
  >
    <div class="grid grid-cols-12 pt-20 w-full font-haffer px-5">
      <div class="col-span-12 md:col-span-6">
        <p class="text-2xl mb-8">Members</p>
        <p class="text-2xl opacity-50">
          We are a distributed online community of collectors, artists,
          investors, and art professionals exploring new ways to build and
          manage an institutional-grade art collection.
        </p>
      </div>
      <div class="hidden md:block md:col-span-3"></div>
      <div class="hidden md:block md:col-span-3">
        <p class="pb-8">Contact</p>
        <p class="opacity-50 pb-4">Jordan Huelskamp<br /><i>Founder</i></p>
        <p class="opacity-50">hello@salondao.xyz</p>
      </div>
    </div>
    <div
      class="grid grid-cols-12 w-full fot-haffer px-5 pt-12"
      stye="font-size: 16px;"
    >
      <div
        class="col-span-6 md:col-span-3 pb-4"
        v-for="(profile, index) in members"
        :key="index"
      >
        <b>{{ profile.fields.firstName }} {{ profile.fields.lastName }}</b>
      </div>
    </div>
    <div class="grid grid-cols-12 pt-12 w-full font-haffer px-5 pt-24 gap-5">
      <div class="col-span-12 md:col-span-6">
        <p class="text-2xl opacity-50">
          Together, our members command unique insights into artists across
          regions, periods, and mediums. Our personal collections include works
          by a diverse set of leading artists.
        </p>
      </div>
    </div>
    <div
      class="grid grid-cols-12 w-full fot-haffer px-5 pt-12 gap-5"
      stye="font-size: 16px;"
    >
      <div
        class="col-span-6 md:col-span-3 pb-4"
        v-for="(artist, index) in artists"
        :key="index"
      >
        <b>{{ artist }}</b>
      </div>
    </div>
  </AppShell>
</template>
<script>
// @ is an alias to /src
import axios from "axios";
import AppShell from "@/components/AppShell";

export default {
  components: { AppShell },
  data() {
    return {
      colors: ["white", "black"],
      members: [],
      allMembers: [],
      artists: [
        "Kennedy Yanko",
        "José Davila",
        "Jean-Baptiste Bernadet",
        "Günther Förg",
        "Mika Tajima",
        "Yoko Ono",
        "Kennedy Yanko",
        "José Davila",
        "Jean-Baptiste Bernadet",
        "Günther Förg",
        "Mika Tajima",
        "Yoko Ono",
      ],
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
