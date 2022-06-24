<template>
  <p class="p-1 text-left text-xl font-akr">
    {{ profile.lastName["en-US"] }},
    {{ profile.firstName["en-US"] }}
  </p>
  <p class="p-1 text-left text-2xl"></p>
  <p class="p-1 text-left flex font-mono">
    {{ profile.walletAddress["en-US"] }}
  </p>

  <p class="border-b border-black p-1 text-right">
    {{ profile.emailAddress["en-US"] }}
  </p>
  <p class="border-b border-black p-1 text-left mb-24">
    {{ profile.units["en-US"] }}
  </p>
</template>
<script>
export default {
  props: ["profile"],
};
</script>
