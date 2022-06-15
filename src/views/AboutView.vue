<template>
  <div class="p-3 bg-black min-h-screen text-white relative">
    <GlobalHeader :hide="false"></GlobalHeader>
    <div class="grid grid-cols-12">
      <div class="col-span-12 sm:col-span-11 md:col-span-11">
        <p class="text-2xl md:text-3xl font-light indent-folch">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p
          v-for="(item, index) in content.fields.content['en-US'].content"
          :key="index"
          class="text-2xl md:text-3xl indent-folch"
        >
          {{ item.content[0].value }}
        </p>
      </div>
    </div>

    <FaderShadow />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import GlobalHeader from "@/components/GlobalHeader";
import FaderShadow from "@/components/FaderShadow";
export default {
  name: "AboutView",
  components: { GlobalHeader, FaderShadow },
  data() {
    return {
      content: {},
    };
  },
  async beforeMount() {
    console.log("members load!");
    try {
      const res = await axios.get(
        "https://salontest-terrifickid.cloud.okteto.net/entry/7fXKpXp8oIZgrvDdfk4Dd0"
      );
      this.content = res.data;
    } catch (error) {
      console.log("error", error);
    }
  },
};
</script>
