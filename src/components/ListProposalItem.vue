<template>
  <div class="border-b border-black py-3 grid grid-cols-12">
    <div class="col-span-8">
      <b class="capitalize">{{ item.sys.contentType.sys.id }} </b>
      {{ item.fields.profile.firstName }}
      {{ item.fields.profile.lastName }}
      <AppCountdown :start="item.sys.createdAt" />
    </div>
    <div class="col-span-4 flex items-center justify-end text-sm">
      <router-link :to="'/governance/' + item.sys.id"
        ><AppButton class="flex items-center"
          >View Proposal
        </AppButton></router-link
      >
    </div>
  </div>
</template>
<script>
import AppButton from "@/components/AppButton";
import AppCountdown from "@/components/AppCountdown";
export default {
  components: { AppButton, AppCountdown },
  props: ["item"],
  mounted() {
    console.log();
  },
};
</script>
