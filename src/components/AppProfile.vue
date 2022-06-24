<template>
  <p class="p-1 text-left text-2xl font-akr">
    {{ profile.fields.lastName["en-US"] }},
    {{ profile.fields.firstName["en-US"] }}
  </p>
  <p class="p-1 text-left text-2xl"></p>
  <p class="p-1 text-left flex">
    {{ profile.fields.walletAddress["en-US"] }}
  </p>

  <p class="border-b border-black p-1 text-right">
    {{ profile.fields.emailAddress["en-US"] }}
  </p>
  <p class="border-b border-black p-1 text-left mb-24">
    {{ profile.fields.units["en-US"] }}
  </p>
</template>
<script>
export default {
  props: ["profile"],
};
</script>
