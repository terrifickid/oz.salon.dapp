<template>
  <div
    class="grid grid-cols-12 border-t border-black py-2 gap-x-5"
    v-for="(item, index) in collection"
    :key="index"
  >
    <div class="col-span-2 group cursor-pointer">
      <div class="bg-gray-100 p-5">
        <div
          class="w-full aspect-square bg-contain bg-no-repeat bg-center bg-gray-100"
          :style="{ backgroundImage: 'url(' + image(item) + ')' }"
        ></div>
      </div>
    </div>
    <div class="col-span-2">{{ item.fields.title }}</div>
    <div class="col-span-2">{{ item.fields.artist }}</div>
    <div class="col-span-2">{{ item.fields.year }}</div>
    <div class="col-span-4">{{ item.fields.description }}</div>
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
