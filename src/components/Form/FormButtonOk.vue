<template>
  <div class="mt-20">
    <a @click="$emit('ready')" class="cursor-pointer text-2xl"> Continue </a
    ><br />
    <a @click="$emit('back')" class="cursor-pointer text-2xl opacity-50"
      >Back</a
    >
  </div>
</template>
<script>
export default {
  components: {},
};
</script>
