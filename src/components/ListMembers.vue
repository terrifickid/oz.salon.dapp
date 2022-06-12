<template>
  <div class="grid grid-cols-12">
    <div class="col-span-12">
      <h1 class="mb-3">members</h1>
      <div
        class="border mb-6 p-4 w-full"
        v-for="(m, index) in members"
        :key="index"
      >
        {{ m.legalNameOfPerson }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    members() {
      return this.$store.getters.getMembers;
    },
  },
  data() {
    return { proposals: [] };
  },
};
</script>
