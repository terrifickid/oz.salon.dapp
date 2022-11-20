<template>
  <div>
    <CollectionSingleModal
      :artwork="collectionSingleItem"
      v-if="collectionSingleItem"
      @close="collectionSingleItem = null"
    />
    <div
      class="grid grid-cols-12 border-t border-black py-2 md:gap-x-5 cursor-pointer"
      v-for="(item, index) in collection"
      :key="index"
      @click="collectionSingleItem = item"
    >
      <div class="col-span-4 md:hidden">
        <div class="bg-gray-100 p-5">
          <div
            class="w-full aspect-square bg-contain bg-no-repeat bg-center bg-gray-100"
            :style="{ backgroundImage: 'url(' + image(item) + ')' }"
          ></div>
        </div>
      </div>
      <div class="col-span-8 md:col-span-12">
        <div class="grid grid-cols-12 md:gap-x-5">
          <div class="hidden md:block col-span-2 group cursor-pointer">
            <div class="bg-gray-100 p-5">
              <div
                class="w-full aspect-square bg-contain bg-no-repeat bg-center bg-gray-100"
                :style="{ backgroundImage: 'url(' + image(item) + ')' }"
              ></div>
            </div>
          </div>
          <div class="col-span-12 md:col-span-2">
            <i>{{ item.fields.title }}</i>
          </div>
          <div class="col-span-12 md:col-span-2">{{ item.fields.artist }}</div>
          <div class="col-span-12 md:col-span-2">{{ item.fields.year }}</div>
          <div class="col-span-12 md:col-span-4">
            <p>{{ item.fields.medium }}</p>
            <p>{{ item.fields.dimensions }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import _ from "lodash";
import CollectionSingleModal from "@/components/collection/CollectionSingleModal.vue";
export default {
  components: { CollectionSingleModal },
  props: ["collection"],
  data() {
    return {
      collectionSingleItem: null,
    };
  },
  methods: {
    image(item) {
      return _.get(item, "fields.images[0].fields.file.url");
    },
  },
};
</script>
