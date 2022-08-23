<template>
  <div class="border-b border-black py-3 grid grid-cols-12 flex items-center">
    <div class="col-span-8">
      <b>
        {{ item.fields.profile.firstName }} {{ item.fields.profile.lastName }}
      </b>
      {{ JSON.parse(item.fields.units0units).units }} units offered @
      {{ format.format(JSON.parse(item.fields.units0units).amount) }}
    </div>
    <div class="col-span-4">
      <AppButton class="float-right" @click="sendUSDC(1)"
        >Accept Offer</AppButton
      >
    </div>
  </div>
</template>
<script>
import AppButton from "@/components/AppButton";
import axios from "axios";
import { ethers } from "ethers";
export default {
  components: { AppButton },
  props: ["item"],
  data() {
    return {
      format: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }),
    };
  },
  methods: {
    async sendUSDC(value = 0.001) {
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
      //var amt = ethers.utils.parseUnits(Number(value).toFixed(1), 6).toNumber();
      try {
        let transfer = await usdcContract.transfer(
          "0x0617A6771F16F12b39217aC017c15E036A01761A",
          value
        );
        var res = await this.submitExecution(this.item.id, {
          type: "units",
          proposal: this.item,
          to: this.walletAddress,
          sourceType: "usdc",
          source: transfer.hash,
        });
        console.log(res);
      } catch (err) {
        this.processing = false;
        console.error(err);
      }
    },
    async submitExecution(id, obj) {
      console.log("Sending Ex");
      const res = await axios.post(this.uri, { data: obj, proposal: id });
      return res.data;
    },
  },
  computed: {
    walletAddress() {
      return this.$store.state.walletAddress;
    },
    uri() {
      return process.env.VUE_APP_URI + "/form/executions";
    },
  },
};
</script>
