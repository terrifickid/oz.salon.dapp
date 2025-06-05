<template>
  <AppShell :isLoaded="isLoaded" :protected="false" class="font-haffer">
    <HomeFaderSlide :slides="payload" :key="test" />
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
      payload: [],
      isLoaded: false,
      test: 0,
      shuffled: [],
      intervalId: null,
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
    async fetchImageAsBase64(url) {
      try {
        const response = await axios.get(url, { responseType: "blob" });
        const blob = response.data;
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result); // Base64 string
          reader.readAsDataURL(blob);
        });
      } catch (error) {
        console.error("Error fetching image:", error);
        return null;
      }
    },
    async disconnect() {
      await this.$store.dispatch("disconnect");
    },
    async randomlySelectArtwork() {
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
      var scoped = this;
      // Create an array of 3 promises for concurrent execution
      const imgP = this.artworks.map(async function (work) {
        var test = await scoped.fetchImageAsBase64(
          process.env.VUE_APP_URI +
            "/optimize?image=https:" +
            _.get(work, "fields.images[0].fields.file.url")
        );
        work.imagedata = test;
        return work;
      });
      // Wait for all promises to resolve
      this.payload = [];
      this.payload = await Promise.all(imgP);

      console.log("artworks", this.payload);
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
    this.intervalId = setInterval(async () => {
      await this.shuffle();
    }, 12000);
  },
  beforeDestroy() {
    console.log("before destroy");
    // Clear the interval when the component is destroyed
    if (this.intervalId) {
      clearInterval(this.intervalId);
      console.log("Interval cleared");
    }
  },
};
</script>
