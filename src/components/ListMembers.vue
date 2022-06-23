<template>
  <div class="text-left">
    <p v-for="(m, index) in members" :key="index">
      {{ m.fields.firstName["en-US"] }} {{ m.fields.lastName["en-US"] }}
    </p>
  </div>
</template>
<script>
export default {
  props: ["members"],
};
</script>
