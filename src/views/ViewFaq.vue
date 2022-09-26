<template>
  <AppShell :colors="colors" :isLoaded="true" :protected="false" class="pb-64">
    <div class="grid grid-cols-12 pt-20 w-full font-haffer px-5">
      <div class="col-span-12 md:col-span-6 text-2xl">
        <p class="mb-16">Frequently Asked Questions</p>
        <ul>
          <li class="mb-8">
            <p class="pb-6">What is Salon?</p>
            <p class="opacity-50">
              Salon is a decentralized contemporary art fund, owned...
            </p>
            <p class="opacity-50">+ Read more</p>
          </li>
          <li class="mb-8">
            <p class="pb-6">How do I apply to Salon?</p>
            <p class="opacity-50">
              Salon is a decentralized contemporary art fund, owned...
            </p>
            <p class="opacity-50">+ Read more</p>
          </li>
          <li class="mb-8">
            <p class="pb-6">
              What exactly is a DAO? And what does it have to do with investing?
            </p>
            <p class="opacity-50">
              Salon is a decentralized contemporary art fund, owned...
            </p>
            <p class="opacity-50">+ Read more</p>
          </li>
        </ul>
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
