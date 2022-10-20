<template>
  <div>
    <CollectionSingleModal
      :artwork="collectionSingleItem"
      v-if="collectionSingleItem"
      @close="collectionSingleItem = null"
    />
    <div class="grid grid-cols-12">
      <div
        class="col-span-12 md:col-span-6 group cursor-pointer relative mb-5 cursor-pointer"
        v-for="(item, index) in collection"
        :key="index"
        @click="collectionSingleItem = item"
      >
        <div
          :style="{ backgroundImage: 'url(' + image(item) + ')' }"
          class="absolute top-5 left-5 right-5 bg-contain bg-center bg-no-repeat"
          style="bottom: 8rem"
        ></div>
        <img
          class="mb-10 w-full invisible"
          :src="image(item)"
          style="margin-bottom: 8rem"
        />
        <div
          class="opacity-50 group-hover:opacity-100 absolute left-5 bottom-0"
        >
          {{ item.fields.artist }}<br />
          <i>{{ item.fields.title }}</i
          ><br />
          {{ item.fields.year }}
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
