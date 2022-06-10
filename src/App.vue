<template>
  <div>
    <div v-show="!ready">&nbsp;</div>
    <div v-show="ready">
      <GlobalHeader />
      <div class="container-fluid mx-auto p-10">
        <div class="grid grid-cols-12">
          <div class="col-span-4">
            <ul>
              <li class="mb-2"><a href="/#/about">About Salon</a></li>
              <li class="mb-2"><a href="/#/collection">Collection</a></li>
              <li class="mb-2"><a href="/#/members">Members</a></li>
            </ul>
          </div>
          <div class="col-span-8"><router-view /></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GlobalHeader from "@/components/GlobalHeader.vue";
export default {
  async mounted() {
    var loading = setInterval(async () => {
      if (document.fonts.check("1rem Haffer XH")) {
        this.ready = true;
        if (this.ready) clearInterval(loading);
      }
    }, 10);
  },
  data() {
    return {
      ready: false,
    };
  },
  components: {
    GlobalHeader,
  },
};
</script>
<style lang="scss"></style>
