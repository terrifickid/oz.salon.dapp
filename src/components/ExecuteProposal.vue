<template>
  <div v-if="proposal.contentType == 'kick' && isAdmin">
    <div class="mb-32">
      <AppButton @click="sendKick">Execute Kick</AppButton>
    </div>
  </div>
  <div class="mb-32" v-else-if="hasEnded && passed && ownsProposal">
    <div
      class="border border-black p-3 mb-2 flex items-start cursor-pointer"
      @click="method = 'usdc'"
    >
      <div class="flex items-start mr-4 mt-1">
        <input
          id="default-checkbox"
          type="radio"
          value="usdc"
          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          v-model="method"
        />
      </div>
      <div>
        <p class="font-bold">Pay with USDC</p>
        <div :class="{ active: method == 'usdc' }" class="collapse">
          <div>
            <p class="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <AppButton @click="sendUSDC" :disabled="processing" class="my-2"
              >Send USDC</AppButton
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="border border-black p-3 mb-2 flex items-start cursor-pointer"
      @click="method = 'wire'"
    >
      <div class="flex items-start mr-4 mt-1">
        <input
          id="default-checkbox"
          type="radio"
          value="wire"
          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          v-model="method"
        />
      </div>
      <div>
        <b>Pay via bank wire</b>
        <div :class="{ active: method == 'wire' }" class="collapse">
          <p class="mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <AppButton @click="sendWire" :disabled="processing" class="my-2"
            >I have sent a wire transfer with code
            <span class="uppercase">'{{ wireCode }}'</span> in MEMO
            field.</AppButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import { ethers } from "ethers";
import axios from "axios";
import AppButton from "@/components/AppButton";
export default {
  components: { AppButton },
  data() {
    return {
      method: null,
      processing: false,
    };
  },
  props: ["proposal"],
  computed: {
    isAdmin() {
      return _.get(this.profile, "role") == "Admin";
    },
    profile() {
      return this.$store.state.profile;
    },
    hasEnded() {
      return typeof _.get(this.proposal, "votes.passed") == "boolean";
    },
    passed() {
      return _.get(this.proposal, "votes.passed") === true;
    },
    walletAddress() {
      return this.$store.state.walletAddress;
    },
    ownsProposal() {
      var p = this.proposal.fields
        .filter(function (item) {
          return _.get(item, "value.walletAddress");
        })
        .map(function (item) {
          return item.value.walletAddress;
        });
      var checkAddress = p[0];
      console.log(checkAddress === this.walletAddress);
      return checkAddress === this.walletAddress;
    },
    wireCode() {
      var p = this.proposal.fields
        .filter(function (item) {
          return _.get(item, "value.walletAddress");
        })
        .map(function (item) {
          return item.value.lastName + item.value.walletAddress.substr(-4);
        });
      return p[0];
    },
    uri() {
      return process.env.VUE_APP_URI + "/form/executions";
    },
  },
  methods: {
    async submitExecution(id, obj) {
      console.log("Sending Ex");
      const res = await axios.post(this.uri, { data: obj, proposal: id });
      return res.data;
    },
    async sendKick() {
      var res = await this.submitExecution(this.proposal.id, {
        type: "kick",
        proposal: this.proposal,
        sourceType: "wire",
        source: this.wireCode,
      });
      console.log(res);
    },
    async sendWire() {
      //executions
      var res = await this.submitExecution(this.proposal.id, {
        type: "units",
        proposal: this.proposal,
        sourceType: "wire",
        source: this.wireCode,
      });
      console.log(res);
    },
    async sendUSDC() {
      this.processing = true;
      var usdc = {
        address: "0x07865c6e87b9f70255377e024ace6630c1eaa37f",
        abi: [
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
      };
      let ethereum = window.ethereum;
      let provider = new ethers.providers.Web3Provider(ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const usdcContract = new ethers.Contract(usdc.address, usdc.abi, signer);
      //  var amt = ethers.utils.parseUnits(Number(1).toFixed(1), 6).toNumber();
      try {
        let transfer = await usdcContract.transfer(
          "0x0617A6771F16F12b39217aC017c15E036A01761A",
          1
        );
        var res = await this.submitExecution(this.proposal.id, {
          type: "units",
          proposal: this.proposal,
          sourceType: "usdc",
          source: transfer.hash,
        });
        console.log(res);
      } catch (err) {
        this.processing = false;
        console.error(err);
      }
    },
  },
};
</script>
<style scoped>
.collapse {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s;
}
.active.collapse {
  max-height: 100vh;
}
</style>
