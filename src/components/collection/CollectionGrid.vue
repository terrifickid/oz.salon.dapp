<template>
  <div class="grid grid-cols-12">
    <div
      class="col-span-12 md:col-span-6 group cursor-pointer relative mb-5"
      v-for="(item, index) in collection"
      :key="index"
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
      <div class="opacity-50 group-hover:opacity-100 absolute left-5 bottom-0">
        {{ item.fields.artist }}<br />
        {{ item.fields.title }}<br />
        {{ item.fields.year }}
      </div>
    </div>
  </div>
</template>
<script>
import _ from "lodash";
export default {
  props: ["collection"],
  methods: {
    image(item) {
      return _.get(item, "fields.images[0].fields.file.url");
    },
  },
};
</script>
