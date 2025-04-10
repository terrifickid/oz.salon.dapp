<template>
  <AppShell :isLoaded="loaded" :protected="false">
    <div class="pb-48">
      <div
        v-if="loaded"
        class="grid grid-cols-12 pt-20 w-full font-haffer px-5"
      >
        <div class="col-span-12 md:col-span-6">
          <p class="text-2xl mb-8">Members</p>
          <p class="text-2xl" v-html="data.code"></p>
        </div>
        <div class="hidden md:block md:col-span-3"></div>
        <div class="hidden md:block md:col-span-3">
          <p class="pb-8">Contact</p>
          <p class="opacity-50 pb-4">Jordan Huelskamp<br /><i>Founder</i></p>
          <p class="opacity-50">hello@salon.fund</p>
        </div>
      </div>
      <div
        class="grid grid-cols-12 w-full fot-haffer px-5 pt-12"
        stye="font-size: 16px;"
      >
        <div
          class="col-span-6 md:col-span-3 pb-4"
          v-for="(profile, index) in data.list1"
          :key="index"
        >
          <span>{{ profile }}</span>
        </div>
      </div>
      <div class="grid grid-cols-12 pt-12 w-full font-haffer px-5 pt-24 gap-5">
        <div class="col-span-12 md:col-span-6">
          <p class="text-2xl opacity-50" v-html="data.code2"></p>
        </div>
      </div>
      <div
        class="grid grid-cols-12 w-full fot-haffer px-5 pt-12 gap-5"
        stye="font-size: 16px;"
      >
        <div
          class="col-span-6 md:col-span-3 pb-4"
          v-for="(artist, index) in data.list2"
          :key="index"
        >
          <span>{{ artist }}</span>
        </div>
      </div>
    </div>
  </AppShell>
</template>
<script>
// @ is an alias to /src
//295KNJLbaMnANC1ea8f2lI
import axios from "axios";
import AppShell from "@/components/AppShell";

export default {
  components: { AppShell },
  data() {
    return {
      loaded: false,
      data: {},
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
  computed: {},
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
              const date1 = Date.parse(a.sys.updatedAt);
              const date2 = Date.parse(b.sys.updatedAt);

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
  async mounted() {
    console.log("members load!");
    try {
      const res = await axios.get(process.env.VUE_APP_URI + "/members");
      this.allMembers = res.data.filter((member) => member.fields.units > 0);
      this.members = res.data.filter((member) => member.fields.units > 0);
      console.log(this.members);
    } catch (error) {
      console.log("error", error);
    }
    console.log("content load!");
    try {
      const res = await axios.get(
        process.env.VUE_APP_URI + "/entry/2ztUn0TxjPCyXFuox0TDQr"
      );
      this.data = res.data.fields;
    } catch (error) {
      console.log("error", error);
    }

    this.loaded = true;
  },
};
</script>
<style scoped>
select {
  border: 0px;
  outline: 0px;
}
</style>
