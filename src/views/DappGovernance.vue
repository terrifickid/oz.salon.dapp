<template>
  <div class="container-fluid mx-auto">
    <div class="grid grid-cols-12 flex items-center bg-black px-10">
      <div class="col-span-6">
        <a href="/#/" class="flex text-white items-center justify-left"
          ><span>EXIT</span></a
        >
      </div>
      <div class="col-span-6 flex justify-end text-white">
        <button @click="connect" class="px-4 p-3">
          <span v-show="!userAddress">Connect</span>
          <span v-show="userAddress">{{ userAddress }}</span>
        </button>
      </div>
    </div>

    <div class="grid grid-cols-12 gap-10 px-10">
      <div class="col-span-2 py-10"><DappHeader></DappHeader></div>
      <div class="col-span-8 py-10">
        <template v-if="!userAddress">
          <div>
            <p class="text-3xl">Connect wallet to continue.</p>
            <button
              @click="connect"
              class="btn px-4 py-3 mt-4 text-lg hover:bg-black hover:text-white border rounded"
            >
              Connect
            </button>
          </div>
        </template>
        <template v-if="userAddress">
          <template v-if="isMember"><ListGovernance /></template>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DappHeader from "@/components/DappHeader";
import ListGovernance from "@/components/ListGovernance";
export default {
  components: { DappHeader, ListGovernance },
  computed: {
    isMember() {
      var found = false;
      this.members.forEach((item) => {
        if (item.wallet == this.userAddress) {
          found = true;
        }
      });
      return found;
    },
    userAddress() {
      return this.$store.state.userAddress;
    },
    members() {
      return this.$store.getters.getMembers;
    },
  },
  methods: {
    connect() {
      this.$store.dispatch("connect");
    },
  },
};
</script>
