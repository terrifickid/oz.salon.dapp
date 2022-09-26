<template>
  <AppShell :colors="colors" :isLoaded="true" :protected="false" class="pb-64">
    <div class="grid grid-cols-12 pt-20 w-full font-haffer px-5">
      <div class="col-span-12 md:col-span-9 xl:col-span-7 text-2xl">
        <p class="mb-8">Contact</p>
        <p class="opacity-50 mb-16">
          We want to hear from you. Reach out with questions, request an
          interview, or just say hello. We’ll respond within 48 hours.
        </p>
        <div class="grid grid-cols-12 w-full mb-16">
          <div class="col-span-12 lg:col-span-8 text-2xl">
            <p class="mb-8">Press</p>
            <p class="opacity-50">
              Hannah Gottlieb-Graham<br />ALMA Communications
            </p>
            <p class="opacity-50 mt-8">hannah@almacommunications.co</p>
          </div>
          <div class="col-span-12 lg:col-span-4 text-2xl">
            <p class="mb-8">Contact</p>
            <p class="opacity-50">Jordan Huelskamp<br /><i>Founder</i></p>
            <p class="opacity-50 mt-8">hello@salondao.xyz</p>
          </div>
        </div>
        <div>
          <p class="mb-8">Recent Press</p>
          -> Cultured <span class="opacity-50">(August 2022)</span><br />
          -> Widewalls <span class="opacity-50">(August 2022)</span><br />
          -> Artnet <span class="opacity-50">(August 2022)</span><br />
          -> Financial Times <span class="opacity-50">(September 2022)</span>
        </div>
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
