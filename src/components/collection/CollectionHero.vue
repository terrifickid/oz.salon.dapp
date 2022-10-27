<template>
  <div
    class="bg-gray-100 pt-24 px-5 relative pb-6 flex"
    v-for="(artwork, index) in collection"
    :key="index"
    v-show="hkey == index"
  >
    <div class="absolute bottom-5 right-5 opacity-50" v-show="!information">
      {{ hikey + 1 }} of {{ artwork.fields.images.length }} images
    </div>
    <div class="absolute top-0 right-5 pt-24 flex" v-show="!information">
      <button @click="prevArtwork()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 mr-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <button @click="nextArtwork()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>

    <div class="absolute bottom-5 left-5">
      <button
        class="flex items-center"
        v-show="!information"
        @click="information = true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>
        Information
      </button>
      <button
        class="flex items-center"
        v-show="information"
        @click="information = false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

        Close
      </button>
    </div>
    <div class="grid grid-cols-12 gap-5 w-full">
      <div
        :class="{
          'col-span-12 md:col-span-4': !information,
          'col-span-12 md:col-span-5': information,
        }"
      >
        <p class="font-bold">
          {{ artwork.fields.artist }}
          <i class="mr-1">{{ artwork.fields.title }} </i>
          {{ artwork.fields.year }}
        </p>
        <span v-if="artwork.fields.state != 'Default'" class="opacity-50">{{
          artwork.fields.state
        }}</span>

        <div class="pt-4 grid grid-cols-12" v-if="information">
          <p class="col-span-8">
            <span class="opacity-50">Acquired</span><br />
            {{ artwork.fields.purchaseDate }} from
            {{ artwork.fields.seller }}
          </p>
          <p class="col-span-4">
            <span class="opacity-50">Medium</span><br />
            {{ artwork.fields.medium }}
          </p>
          <p class="pt-4 hidden">
            <span class="opacity-50">Appraised Value</span><br />
            {{ format.format(artwork.fields.mostRecentAppraisalPrice) }}
          </p>

          <p class="pt-8 col-span-12">{{ artwork.fields.description }}</p>
        </div>
      </div>
      <div
        :class="{
          'col-span-12 md:col-span-4': !information,
          'col-span-12 md:col-span-4 md:col-start-8': information,
        }"
        class="py-20"
      >
        <img
          v-for="(image, index) in artwork.fields.images"
          :src="image.fields.file.url"
          :key="index"
          v-show="index == this.hikey"
          class="w-full"
        />
        <div v-show="information" class="flex justify-center items-center">
          <img
            v-for="(image, index) in artwork.fields.images"
            :src="image.fields.file.url"
            :key="index"
            class="w-20 my-5 mx-2 cursor-pointer"
            @click="this.hikey = index"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["collection"],
  data() {
    return {
      hkey: 0,
      hikey: 0,
      information: false,
      format: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }),
    };
  },
  methods: {
    nextArtwork() {
      this.information = false;
      this.hkey++;
      if (this.hkey > this.collection.length - 1) this.hkey = 0;
      console.log("key", this.hkey);
    },
    prevArtwork() {
      this.information = false;
      this.hkey--;
      if (this.hkey < 0) this.hkey = this.collection.length - 1;
      console.log("key", this.hkey);
    },
  },
};
</script>
