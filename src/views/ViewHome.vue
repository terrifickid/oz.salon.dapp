<template>
  <AppShell :isLoaded="isLoaded" :protected="false" class="font-haffer pt-16">
    <HomeFaderSlide :slides="artworks" :key="test" />
  </AppShell>
</template>

<script>
// @ is an alias to /src
import _ from "lodash";
import axios from "axios";
import AppShell from "@/components/AppShell";
import HomeFaderSlide from "@/components/HomeFaderSlide";

export default {
  name: "HomeView",
  components: { AppShell, HomeFaderSlide },
  data() {
    return {
      collection: [],
      artworks: [],
      isLoaded: false,
      test: 0,
    };
  },
  computed: {
    walletAddress() {
      return this.$store.state.walletAddress;
    },
    profile() {
      return this.$store.state.profile;
    },
    isMember() {
      return _.get(this.profile, "units");
    },
  },
  methods: {
    async disconnect() {
      await this.$store.dispatch("disconnect");
    },
    async randomlySelectArtwork() {
      this.collection = _.shuffle(this.collection);
      this.artworks.push(this.collection.shift());
    },
  },
  async mounted() {
    console.log("collection load!");
    try {
      const res = await axios.get(process.env.VUE_APP_URI + "/type/collection");
      this.collection = res.data.message.items;
      while (this.artworks.length < 3) {
        this.randomlySelectArtwork();
      }
      console.log(this.artworks);
      this.isLoaded = true;
    } catch (error) {
      console.log("error", error);
    }
    setInterval(() => {
      this.test = Math.round(Math.random() * 1000);
    }, 10000);
  },
};
</script>
