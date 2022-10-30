<template>
  <AppShell
    :isLoaded="loaded"
    :protected="false"
    :kycAllowed="true"
    class="pb-64"
  >
    <CollectionHero :collection="collection" />

    <div ref="nav" class="grid grid-cols-12 px-5 py-10 gap-5">
      <div class="col-span-12 md:col-span-2">
        <div class="md:hidden">
          <ul class="mb-5">
            <li class="opacity-50">Format</li>
            <li
              :class="{
                'opacity-50': selectedView != 'grid',
                'opacity-100': selectedView == 'grid',
              }"
            >
              <button @click="selectedView = 'grid'">Grid</button>
            </li>
            <li
              :class="{
                'opacity-50': selectedView != 'index',
                'opacity-100': selectedView == 'index',
              }"
            >
              <button @click="selectedView = 'index'">Index</button>
            </li>
            <li
              :class="{
                'opacity-50': selectedView != 'gallery',
                'opacity-100': selectedView == 'gallery',
              }"
            >
              <button @click="selectedView = 'gallery'">Gallery</button>
            </li>
          </ul>
        </div>
        <div :class="{ sticky: sticky }" class="hidden md:block">
          <ul class="mb-5">
            <li class="opacity-50">Format</li>
            <li
              :class="{
                'opacity-50': selectedView != 'grid',
                'opacity-100': selectedView == 'grid',
              }"
            >
              <button @click="selectedView = 'grid'">Grid</button>
            </li>
            <li
              :class="{
                'opacity-50': selectedView != 'index',
                'opacity-100': selectedView == 'index',
              }"
            >
              <button @click="selectedView = 'index'">Index</button>
            </li>
            <li
              :class="{
                'opacity-50': selectedView != 'gallery',
                'opacity-100': selectedView == 'gallery',
              }"
            >
              <button @click="selectedView = 'gallery'">Gallery</button>
            </li>
          </ul>
          <ul class="hidden md:block">
            <li class="opacity-50">Sort By</li>
            <li
              :class="{
                'opacity-50': selectedSort != 'acquired',
                'opacity-100': selectedSort == 'acquired',
              }"
            >
              <button @click="selectedSort = 'acquired'">
                Acquired<span style="margin-left: 0.24rem; margin-right: 1px"
                  >(</span
                >{{ this.collection.length
                }}<span style="margin-left: 1px">)</span>
              </button>
            </li>
            <li
              :class="{
                'opacity-50': selectedSort != 'artist',
                'opacity-100': selectedSort == 'artist',
              }"
            >
              <button @click="selectedSort = 'artist'">Artist</button>
            </li>
            <li
              :class="{
                'opacity-50': selectedSort != 'created',
                'opacity-100': selectedSort == 'created',
              }"
            >
              <button @click="selectedSort = 'created'">Created</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-span-12 md:col-span-10">
        <div v-if="selectedView == 'grid'">
          <CollectionGrid :collection="collectionSorted" />
        </div>
        <div v-if="selectedView == 'index'">
          <CollectionIndex :collection="collectionSorted" />
        </div>
        <div v-if="selectedView == 'gallery'">
          <CollectionGallery :collection="collectionSorted" />
        </div>
      </div>
    </div>
  </AppShell>
</template>
<script>
// @ is an alias to /src

import axios from "axios";
import AppShell from "@/components/AppShell";
import CollectionHero from "@/components/collection/CollectionHero";
import CollectionGrid from "@/components/collection/CollectionGrid";
import CollectionIndex from "@/components/collection/CollectionIndex";
import CollectionGallery from "@/components/collection/CollectionGallery";
//import ImageAsset from "@/components/ImageAsset";

export default {
  name: "CollectionView",
  components: {
    AppShell,
    CollectionHero,
    CollectionGrid,
    CollectionIndex,
    CollectionGallery,
  },
  data() {
    return {
      sticky: false,
      collection: [],
      selectedView: "grid",
      selectedSort: "acquired",
    };
  },
  computed: {
    loaded() {
      return this.collection.length;
    },
    collectionSorted() {
      var r = Object.values(this.collection);
      console.log(r);
      switch (this.selectedSort) {
        case "acquired":
          r.sort(function compareFn(a, b) {
            var dateA = new Date(a.fields.purchaseDate);
            var dateB = new Date(b.fields.purchaseDate);
            if (dateA > dateB) return -1;
            if (dateA < dateB) return 1;
            return 0;
          });
          break;
        case "artist":
          r.sort(function compareFn(a, b) {
            if (a.fields.artist > b.fields.artist) return 1;
            if (a.fields.artist < b.fields.artist) return -1;
            return 0;
          });
          break;
        case "created":
          r.sort(function compareFn(a, b) {
            if (a.fields.year > b.fields.year) return 1;
            if (a.fields.year < b.fields.year) return -1;
            return 0;
          });
          break;
        default:
          break;
      }
      return r;
    },
  },
  methods: {
    navScroll() {
      console.log(window.pageYOffset > this.$refs.nav.offsetTop);
      if (window.pageYOffset + 64 > this.$refs.nav.offsetTop)
        return (this.sticky = true);
      return (this.sticky = false);
    },
  },
  async mounted() {
    window.onscroll = this.navScroll;

    console.log("collection load!");
    try {
      const res = await axios.get(process.env.VUE_APP_URI + "/type/collection");
      this.collection = res.data.message.items;
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

.sticky {
  @apply fixed;
  top: 102px;
}
</style>
