<template>
  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-12">
      <h1 class="mb-3">members</h1>
    </div>
    <div
      class="col-span-12 md:col-span-6"
      v-for="(m, index) in members"
      :key="index"
    >
      <div class="border p-4">
        {{ m.legalNameOfPerson }}
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      members: [],
    };
  },
  async beforeMount() {
    console.log("members load!");
    try {
      const res = await axios.get(
        "https://salontest-terrifickid.cloud.okteto.net/members"
      );
      this.members = res.data;
    } catch (error) {
      console.log("error", error);
    }
  },
};
</script>
