<template>
  <div v-for="(artwork, index) in collection" :key="index">
    <div
      class="bg-gray-100 pt-24 px-5 relative pb-6 flex"
      id="bg_s"
      v-if="hkey == index"
    >
      <div class="absolute bottom-5 right-5 opacity-50" v-show="!information">
        {{ hikey + 1 }} of {{ artwork.fields.images.length }} Images
      </div>
      <div class="absolute top-0 right-5 pt-24 flex z-30" v-show="!information">
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

        <button @click="nextArtwork">
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

      <div class="absolute bottom-5 left-5 z-30">
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
          class="flex items-center opacity-50"
          v-show="information"
          @click="
            information = false;
            hikey = 0;
          "
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
      <div class="grid grid-cols-12 md:gap-x-10 w-full">
        <div
          :class="{
            'col-span-12 lg:col-span-4': !information,
            'col-span-12 lg:col-span-6': information,
          }"
        >
          <div>
            <span class="block lg:inline">{{ artwork.fields.artist }}</span>
            <i class="lg:mr-2 lg:ml-1 block lg:inline">{{
              artwork.fields.title
            }}</i>
            <span class="block lg:inline">{{ artwork.fields.year }}</span>
          </div>
          <span v-if="artwork.fields.state != 'Default'" class="opacity-50">{{
            artwork.fields.state
          }}</span>
          <div class="pt-8 grid grid-cols-12 md:gap-x-10" v-if="information">
            <p class="col-span-6 xl:col-span-8">
              <span class="opacity-50">Acquired</span><br />
              {{ artwork.fields.purchaseDate }} from
              {{ artwork.fields.seller }}
            </p>
            <p class="col-span-6 xl:col-span-4">
              <span class="opacity-50">Medium</span><br />
              {{ artwork.fields.medium }}
            </p>
            <p class="col-span-6 xl:col-span-8 pt-8" v-show="isMember">
              <span class="opacity-50">Purchase Price</span><br />
              {{ format.format(artwork.fields.purchasePrice) }}
            </p>
            <p class="col-span-6 xl:col-span-4 pt-8" v-show="isMember">
              <span class="opacity-50">Fair Market Value</span><br />
              {{ format.format(artwork.fields.mostRecentAppraisalPrice) }}
            </p>

            <p
              class="pt-8 md:pb-12 col-span-12"
              v-html="artwork.fields.description"
            ></p>
          </div>
        </div>
        <div
          :class="{
            'col-span-12 lg:col-span-4': !information,
            'col-span-12 lg:col-span-6': information,
          }"
          class="py-10 flex items-center justify-center"
        >
          <div>
            <img
              v-for="(image, index) in artwork.fields.images"
              :src="proxyImageURI(image.fields.file.url)"
              :key="index"
              :class="{
                hidden: index != this.hikey,
                visible: index == this.hikey,
              }"
              class="mx-auto"
              style="max-height: 60vh"
            />
            <div
              v-show="information"
              class="flex justify-center items-center overflow-hidden"
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
    </div>
  </div>
</template>
<script>
export default {
  components: {},
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
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    isMember() {
      if ("units" in this.profile) return this.profile.units;
      return false;
    },
  },
  methods: {
    proxyImageURI(src) {
      return process.env.VUE_APP_URI + "/proxy?image=https:" + src;
    },
    nextArtwork() {
      this.information = false;
      this.hkey++;
      if (this.hkey > this.collection.length - 1) this.hkey = 0;
    },
    prevArtwork() {
      this.information = false;
      this.hkey--;
      if (this.hkey < 0) this.hkey = this.collection.length - 1;
      console.log("key", this.hkey);
    },
  },
  mounted() {
    this.hkey = this.$route.params.id;
    if (!this.$route.params.id) this.hkey = 0;
  },
};
</script>
