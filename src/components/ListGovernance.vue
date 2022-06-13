<template>
  <div class="grid grid-cols-12">
    <div class="col-span-12">
      <h1 class="mb-3">governance</h1>
      <div
        class="border mb-6 p-4 w-full grid grid-cols-2"
        v-for="(p, index) in proposals"
        :key="index"
      >
        <div>
          <p>{{ p.fields.title["en-US"] }}</p>
          {{ p.fields.description["en-US"] }}
          <p class="mt-6">
            <ButtonYes :id="p.sys.id" :votes="p.fields.votes" />
            <ButtonNo :id="p.sys.id" :votes="p.fields.votes" />
          </p>
        </div>
        <CounterVote :votes="p.fields.votes" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ButtonYes from "@/components/ButtonYes";
import ButtonNo from "@/components/ButtonNo";
import CounterVote from "@/components/CounterVote";
export default {
  components: { ButtonYes, ButtonNo, CounterVote },
  data() {
    return { proposals: [] };
  },
  async beforeMount() {
    console.log("GLOad!");
    try {
      const res = await axios.get(
        "https://salontest-terrifickid.cloud.okteto.net/governance"
      );
      this.proposals = res.data;
    } catch (error) {
      console.log("error", error);
    }
  },
};
</script>
