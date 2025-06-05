<template>
  <div>
    <CollectionSingleModal
      :artwork="collectionSingleItem"
      v-if="collectionSingleItem"
      @close="collectionSingleItem = null"
    />
    <div class="grid grid-cols-12 md:gap-10">
      <div
        class="col-span-12 md:col-span-6 group cursor-pointer relative mb-12 cursor-pointer flex items-center"
        v-for="(item, index) in collection"
        :key="index"
        @click="collectionSingleItem = item"
      >
        <div>
          <img class="mb-24" :src="image(item)" />
          <div class="opacity-50 group-hover:opacity-100 absolute bottom-0">
            {{ item.fields.artist }}<br />
            <i>{{ item.fields.title }}</i
            ><br />
            {{ item.fields.year }}
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
    proxyImageURI(src) {
      return process.env.VUE_APP_URI + "/proxy?image=https://" + src;
    },
    image(item) {
      return this.proxyImageURI(
        _.get(item, "fields.images[0].fields.file.url")
      );
    },
  },
};
</script>
