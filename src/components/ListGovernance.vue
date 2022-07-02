<template>
  <div class="grid grid-cols-12 w-full">
    <div class="col-span-12">
      <div
        class="border-b mb-6 p-4 w-full grid grid-cols-12"
        v-for="(p, index) in proposals"
        :key="index"
      >
        <div class="col-span-4">
          <p class="text-3xl mb-8">
            {{ p.fields.proposalType["en-US"][0] }} #{{ p.sys.id }}
          </p>
          <p>{{ p }}</p>
        </div>
        <div class="col-span-4 flex justify-center">
          <div>
            <ButtonYes :id="p.sys.id" :votes="p.fields.votes" />
            <ButtonNo :id="p.sys.id" :votes="p.fields.votes" />
          </div>
        </div>
        <div class="col-span-4">
          <CounterVote :votes="p.fields.votes" />
          <button @click="execute(p.sys.id)" class="mt-2 text-pink flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            Execute
          </button>
        </div>
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
  methods: {
    async execute(id) {
      console.log("execute!");
      try {
        const res = await axios.post(
          "https://salontest-terrifickid.cloud.okteto.net/execute",
          {
            id: id,
          }
        );
        console.log("executed!", res.data);
      } catch (error) {
        console.log("error", error);
      }
    },
  },
  async beforeMount() {
    console.log("GLOad!");
    try {
      const res = await axios.get(
        "https://salontest-terrifickid.cloud.okteto.net/type/governance"
      );
      this.proposals = res.data;
    } catch (error) {
      console.log("error", error);
    }
  },
};
</script>
