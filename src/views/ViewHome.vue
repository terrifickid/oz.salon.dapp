<template>
  <AppShell :isLoaded="isLoaded" :protected="false" class="font-haffer">
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
      shuffled: [],
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
      console.log(this.shuffled);
      this.shuffled = _.shuffle(this.shuffled);

      this.artworks.push(this.shuffled.shift());
    },
    async shuffle() {
      console.log("shuffle");
      this.shuffled = this.collection;
      this.artworks = [];
      while (this.artworks.length < 3) {
        await this.randomlySelectArtwork();
      }
      console.log("artworks", this.artworks);
    },
  },
  async mounted() {
    console.log("collection load!");
    try {
      const res = await axios.get(process.env.VUE_APP_URI + "/type/collection");
      this.collection = res.data.message.items;
      await this.shuffle();
      this.isLoaded = true;
    } catch (error) {
      console.log("error", error);
    }
    setInterval(async () => {
      await this.shuffle();
      this.test = Math.round(Math.random() * 1000);
    }, 12000);
  },
};
</script>
