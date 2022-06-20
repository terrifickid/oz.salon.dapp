<template>
  <div class="w-screen text-center">
    <p v-for="(m, index) in members" :key="index">
      {{ m.fields.firstName["en-US"] }} {{ m.fields.lastName["en-US"] }}
    </p>
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
