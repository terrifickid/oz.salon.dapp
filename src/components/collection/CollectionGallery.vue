<template>
  <div
    class="bg-gray-100 p-5 relative flex mb-5 overflow-hidden"
    v-for="(artwork, index) in collection"
    :key="index"
  >
    <div class="absolute bottom-5 right-5 opacity-50" v-show="!information">
      {{ hikey + 1 }} of {{ artwork.fields.images.length }} images
    </div>

    <div class="absolute bottom-5 left-5">
      <button
        class="flex items-center"
        v-show="!information[index]"
        @click="information[index] = true"
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
        v-show="information[index]"
        @click="information[index] = false"
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
    <div class="grid grid-cols-12 md:gap-5 w-full">
      <div
        :class="{
          'col-span-12 md:col-span-4': !information[index],
          'col-span-12 md:col-span-5': information[index],
        }"
      >
        <p>
          {{ artwork.fields.artist }} <i>{{ artwork.fields.title }}</i>
          {{ artwork.fields.year }}
        </p>
        <div class="pt-4" v-if="information[index]">
          <p>
            <span class="opacity-50">Acquired</span><br />
            {{ artwork.fields.purchaseDate }} from
            {{ artwork.fields.seller }}
          </p>
          <p class="pt-4">
            <span class="opacity-50">Appraised Value</span><br />
            {{ format.format(artwork.fields.mostRecentAppraisalPrice) }}
          </p>

          <p class="pt-8 pb-12" v-html="artwork.fields.description"></p>
        </div>
      </div>
      <div
        :class="{
          'col-span-12 md:col-span-4': !information[index],
          'col-span-12 md:col-span-4 md:col-start-8': information[index],
        }"
        class="py-20"
      >
        <img
          v-for="(image, index) in artwork.fields.images"
          :src="proxyImageURI(image.fields.file.url)"
          :key="index"
          v-show="index == this.hikey"
          class="w-full"
        />
        <div
          v-show="information[index]"
          class="flex justify-center items-center"
          v-if="artwork.fields.images.length > 1"
        >
          <img
            v-for="(image, index) in artwork.fields.images"
            :src="proxyImageURI(image.fields.file.url)"
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
      information: [],
      format: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }),
    };
  },
  methods: {
    proxyImageURI(src) {
      return process.env.VUE_APP_URI + "/proxy?image=https://" + src;
    },
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
