<template>
  <div class="mt-20">
    <a @click="$emit('ready')" class="cursor-pointer"> Continue </a><br />
    <a @click="$emit('back')" class="cursor-pointer opacity-50">Back</a>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>
