<template>
  <div class="border-b border-black py-3 grid grid-cols-12">
    <div class="col-span-8">
      <b class="capitalize">{{ item.contentType }}</b>
      {{ item.profile.firstName }} {{ item.profile.lastName }}
      <AppCountdown :start="item.createdAt" />
    </div>
    <div class="col-span-4 flex items-center justify-end text-sm">
      <router-link :to="'/governance/' + item.id"
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
};
</script>
