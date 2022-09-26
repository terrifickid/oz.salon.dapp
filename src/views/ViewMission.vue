<template>
  <AppShell :colors="colors" :isLoaded="true" :protected="false" class="pb-64">
    <div class="grid grid-cols-12 pt-20 w-full font-haffer px-5">
      <div class="col-span-12 md:col-span-6">
        <p class="text-2xl mb-8">Mission</p>
        <p class="text-2xl opacity-50">
          Salon is building the world’s largest shared art collection, with
          works on display throughout the homes of our members worldwide. In a
          democratic voting process, we allocate our funds together using
          Salon’s app.
        </p>
        <p class="text-2xl pt-12 text-green-500">
          <a href="#">Download Whitepaper ↓</a>
        </p>
      </div>
      <div class="hidden md:block md:col-span-3"></div>
      <div class="hidden md:block md:col-span-3">
        <p class="pb-8">Contact</p>
        <p class="opacity-50 pb-4">Jordan Huelskamp<br /><i>Founder</i></p>
        <p class="opacity-50">hello@salondao.xyz</p>
      </div>
    </div>
  </AppShell>
</template>
<script>
// @ is an alias to /src

import AppShell from "@/components/AppShell";

export default {
  components: { AppShell },
  data() {
    return {
      colors: ["white", "black"],
      members: [],
      allMembers: [],
      artists: [
        "Kennedy Yanko",
        "José Davila",
        "Jean-Baptiste Bernadet",
        "Günther Förg",
        "Mika Tajima",
        "Yoko Ono",
        "Kennedy Yanko",
        "José Davila",
        "Jean-Baptiste Bernadet",
        "Günther Förg",
        "Mika Tajima",
        "Yoko Ono",
      ],
    };
  },
};
</script>
<style scoped>
select {
  border: 0px;
  outline: 0px;
}
</style>
