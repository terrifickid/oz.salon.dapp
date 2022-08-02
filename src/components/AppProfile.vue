<template>
  <p class="p-1 text-left text-xl font-haffer font-bold">
    {{ profile.lastName }},
    {{ profile.firstName }}
  </p>
  <p class="p-1 text-left text-2xl"></p>
  <p class="p-1 text-left flex font-haffer text-xs sm:text-base font-bold">
    {{ profile.walletAddress }}
  </p>

  <p class="border-b border-black p-1 text-right text-xs sm:text-base">
    {{ profile.emailAddress }}
  </p>
  <p class="border-b border-black p-1 text-left mb-24 text-xs sm:text-base">
    {{ profile.units }}
  </p>
  <p>
    <AppDelegateSelect />
  </p>
</template>
<script>
import AppDelegateSelect from "@/components/AppDelegateSelect";
export default {
  components: { AppDelegateSelect },
  props: ["profile"],
};
</script>
