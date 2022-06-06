<template>
  <GlobalHeader />
  <div class="container-fluid mx-auto p-10">
    <div class="grid grid-cols-12">
      <div class="col-span-4">
        <ul>
          <li class="mb-2"><a href="/about">About Salon</a></li>
          <li class="mb-2"><a href="/collection">Collection</a></li>
          <li class="mb-2"><a href="/members">Members</a></li>
        </ul>
      </div>
      <div class="col-span-8"><router-view /></div>
    </div>
  </div>
</template>
<script>
import GlobalHeader from "@/components/GlobalHeader.vue";
export default {
  components: {
    GlobalHeader,
  },
};
</script>
<style lang="scss"></style>
