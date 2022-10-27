<template>
  <div v-if="loaded">
    <div
      class="py-3 grid grid-cols-12 flex items-center"
      v-if="!executionStatus"
    >
      <div class="col-span-12">
        {{ JSON.parse(item.fields.units0units).units }} units offered for
        {{ format.format(JSON.parse(item.fields.units0units).amount) }}
      </div>
      <div class="col-span-12">
        <AppButton v-if="isSameUser" @click="cancel()" class="mt-8"
          >Cancel</AppButton
        >

        <AppButton @click="sendUSDC(0.001)" class="mt-8"
          >Accept Offer</AppButton
        >
      </div>
    </div>
    <div v-else-if="isCancelled">Cancelled</div>
    <div v-else>
      {{ executionStatus }}
    </div>
  </div>
</template>
<script>
import _ from "lodash";
import AppButton from "@/components/AppButton";
import axios from "axios";
import { ethers } from "ethers";
export default {
  components: { AppButton },
  props: ["item"],
  emits: ["transfer", "loading", "done"],
  data() {
    return {
      loaded: false,
      exec: false,
      format: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }),
    };
  },
  methods: {
    async sendUSDC(value) {
      this.processing = true;
      var usdc = {
        address: this.usdcContractAddress,
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
      var amt = ethers.utils.parseUnits(value.toString(), 6).toNumber();
      try {
        let transfer = await usdcContract.transfer(
          this.item.fields.profile.walletAddress,
          amt,
          { gasLimit: 700000 }
        );
        var res = await this.submitExecution(this.item.sys.id, "transfer", {
          to: this.walletAddress,
          sourceType: "usdc",
          source: transfer.hash,
        });
        console.log(res);
        if (res.result === true) {
          window.location.reload();
        } else {
          alert("Critical Error: Please contact support");
        }
      } catch (err) {
        this.processing = false;
        console.error(err);
      }
    },
    async cancel() {
      this.$emit("loading");
      try {
        var r = await this.submitExecution(this.item.sys.id, "transfer", {
          cancel: true,
        });
        console.log(r);
      } catch (e) {
        console.error(e);
        alert("Error");
      }
      //window.location.reload();
    },
    async submitExecution(id, type, obj) {
      console.log("Sending Ex");
      const res = await axios.post(this.uri, {
        proposal: id,
        type: type,
        data: obj,
      });
      return res.data;
    },
  },
  computed: {
    executionStatus() {
      var status = _.get(this, "exec[0].fields.status");
      if (status) return status;
      return false;
    },
    isCancelled() {
      var c = _.get(this, "exec[0].fields.data.cancel");
      return c === true;
    },
    isSameUser() {
      return this.walletAddress == this.item.fields.profile.walletAddress;
    },
    walletAddress() {
      return this.$store.state.walletAddress;
    },
    uri() {
      return process.env.VUE_APP_URI + "/form/executions";
    },
    usdcContractAddress() {
      return process.env.VUE_APP_USDC_CONTRACT;
    },
  },
  async mounted() {
    try {
      console.log("Load Exec!");
      const res = await axios.get(
        process.env.VUE_APP_URI + "/execution/" + this.item.sys.id
      );
      this.exec = _.get(res, "data");
      this.loaded = true;
    } catch (err) {
      console.error(err);
    }
  },
};
</script>
