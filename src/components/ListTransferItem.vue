<template>
  <div class="border-b border-black py-3 grid grid-cols-12 flex items-center">
    <div class="col-span-8">
      {{ item.fields.units0units.units }} units for
      {{ item.fields.units0units.amount }}
    </div>
    <div class="col-span-4">
      <AppButton class="float-right">Accept</AppButton>
    </div>
  </div>
</template>
<script>
import AppButton from "@/components/AppButton";

export default {
  components: { AppButton },
  props: ["item"],
};
</script>
