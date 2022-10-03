<template>
  <AppShell :isLoaded="true" :protected="true" class="pb-64">
    <div class="grid grid-cols-12 pt-20 gap-x-20 w-full font-haffer px-5">
      <div class="col-span-12"><p class="text-2xl mb-8">Resources</p></div>
      <div class="col-span-12 md:col-span-6">
        <p class="text-2xl opacity-50">
          Our resources for a contemporary art fund, owned and managed by a
          distributed online community of collectors, artists, investors, and
          art professionals. The world’s largest shared art collection, with
          works on display throughout the homes of our members around the world.
          Using blockchain-based voting and equity ownership, Salon brings web 3
          technology to the traditional art market.
        </p>
        <p class="text-2xl pt-12 text-green-500">
          <a href="#">Download Whitepaper ↓</a>
        </p>
      </div>

      <div class="hidden md:block md:col-span-6">
        <ul>
          <li class="mb-5">
            Operating Agreement<br />
            <a href="#" class="text-green-500">↓ Download PDF</a>
          </li>
          <li class="mb-5">
            Subscription Agreement<br />
            <a href="#" class="text-green-500">↓ Download PDF</a>
          </li>
          <li class="mb-5">
            Brand Assets<br />
            <a href="#" class="text-green-500"
              >↓ Download ZIP of our Logos, Symbols, and Brand guidelines</a
            >
          </li>
          <li class="mb-5">
            Hosting Spreadsheet<br />
            <a href="#" class="text-green-500"
              >-> View our current Hosting Spreadsheet (Sept 2022)</a
            >
          </li>
          <li class="mb-5">
            Artwork Spreadsheet<br />
            <a href="#" class="text-green-500"
              >-> View our current Artwork management</a
            >
          </li>
        </ul>
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
