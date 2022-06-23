<template>
  <div class="w-full text-center">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <select class="text-right alpha">
      <option>A</option>
      <option>B</option>
      <option>C</option>
      <option>D</option>
      <option>E</option>
      <option>F</option>
      <option>G</option>
      <option>H</option>
      <option>I</option>
      <option>J</option>
      <option>K</option>
      <option>L</option>
      <option>M</option>
      <option>N</option>
      <option>O</option>
      <option>P</option>
      <option>Q</option>
      <option>R</option>
      <option>S</option>
      <option>T</option>
      <option>U</option>
      <option>V</option>
      <option>W</option>
      <option>X</option>
      <option>Y</option>
      <option>Z</option>
    </select>
    <select class="text-right p-2">
      <option v-for="(m, index) in members" :key="index">
        {{ m.fields.firstName["en-US"] }} {{ m.fields.lastName["en-US"] }}
      </option>
    </select>
    <select class="text-right p-2">
      <option>Most Units</option>
      <option>Most Votes</option>
      <option>Newest</option>
    </select>

    <div class="grid grid-cols-12 gap-3 hidden">
      <div
        v-for="(m, index) in members"
        :key="index"
        class="col-span-12 border border-black rounded px-3 py-32 text-center"
      >
        {{ m.fields.firstName["en-US"] }} {{ m.fields.lastName["en-US"] }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["members"],
};
</script>
<style scoped>
select.alpha {
  @apply p-2;
}
</style>
