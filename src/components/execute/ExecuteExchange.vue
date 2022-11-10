<template>
  <AppLoaderFull v-if="processing" />
  <div v-if="loaded">
    <p class="mb-8" v-if="statusMessage">
      <span class="opacity-50">Status</span><br />{{ statusMessage }}
    </p>
    <div
      class="py-3 grid grid-cols-12 flex items-center"
      v-if="!executionStatus && isVerified"
    >
      <div class="col-span-12">
        {{ item.fields.profile.firstName }}
        {{ item.fields.profile.lastName }} is offering to sell
        {{ JSON.parse(item.fields.units0units).units }} Salon units for a total
        of {{ format.format(JSON.parse(item.fields.units0units).amount) }}.
        Their offer represents a per-unit price of
        {{ format.format(JSON.parse(item.fields.units0units).pricePerUnit) }}.
        <p class="text-green-500 mb-6">
          For reference, the current trade price of Salon units is

          {{ format.format(suggestedTradingPrice) }}.
        </p>

        <p class="pb-6">
          <span class="opacity-50">Note</span><br />{{ item.fields.note0long }}
        </p>
        <p class="mb-6 border-t pt-6">
          Salon's exchange proposal facilitates the buying and selling of units
          amongst our community, empowering members to transact with one another
          safely. All transactions take place using a secure wallet-to-wallet
          transfer in USDC.
        </p>
        <p class="border-b pb-6">
          If you are the buyer, please ensure you have sufficient USDC in your
          digital wallet to complete the transaction. USDC can be purchased
          using a crypto exchange service, such as Coinbase, and then
          transferred to your Salon Metamask wallet.
        </p>
      </div>
      <div class="col-span-12">
        <AppButton v-if="isSameUser" @click="cancel()" class="mt-8"
          >Cancel</AppButton
        >

        <AppButton @click="sendUSDC(0.001)" v-if="!isSameUser" class="mt-8"
          >Accept Offer</AppButton
        >
      </div>
    </div>
  </div>
</template>
<script>
import _ from "lodash";
import AppButton from "@/components/AppButton";
import AppLoaderFull from "@/components/AppLoaderFull";
import axios from "axios";
import { ethers } from "ethers";
export default {
  components: { AppButton, AppLoaderFull },
  props: ["item"],
  emits: ["transfer", "loading", "done"],
  data() {
    return {
      processing: true,
      loaded: false,
      exec: false,
      treasury: {},
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
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
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
        let balance = await usdcContract.balanceOf(this.walletAddress);
        var busdc = parseFloat(ethers.utils.formatUnits(balance.toString(), 6));
        if (value > busdc) throw { message: "Insufficient USDC balance" };

        let transfer = await usdcContract.transfer(
          this.item.fields.profile.walletAddress,
          amt,
          { gasLimit: 60000 }
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
        alert(err.message);
        this.processing = false;
        console.error(err);
      }
    },
    async cancel() {
      this.processing = true;
      try {
        var r = await this.submitExecution(this.item.sys.id, "transfer", {
          cancel: true,
        });
        window.location.reload();
        console.log(r);
      } catch (e) {
        console.error(e);
        alert("Error");
      }
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
    suggestedTradingPrice() {
      return _.get(this.treasury, "currentTradePrice");
    },
    executionStatus() {
      var status = _.get(this, "exec[0].fields.status");
      if (status) return status;
      return false;
    },
    statusMessage() {
      var msg;
      switch (this.executionStatus) {
        case "Pending":
          msg = "Exchange accepted, transaction processing";
          if (this.isCancelled) msg = "Canceling";
          break;
        case "Completed":
          msg = "Exchange completed on " + this.executionCompletedDate;
          if (this.isCancelled)
            msg = "Exchange cancelled on " + this.executionCompletedDate;
          break;
        case "Expired":
          msg = this.executionStatus;
          break;
        case "Cancelled":
          msg = this.executionStatus;
          break;
        default:
          msg = false;
          if (!this.isVerified) msg = "Verifying";
      }

      return msg;
    },
    executionCompletedDate() {
      var date = _.get(this, "exec[0].sys.updatedAt");
      var d = new Date(date);
      return d.toLocaleString("default", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    },
    isVerified() {
      return (
        this.item.fields.verified == this.item.fields.profile.walletAddress
      );
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
      var res = await Promise.all([
        axios.get(process.env.VUE_APP_URI + "/treasury/"),
        axios.get(process.env.VUE_APP_URI + "/execution/" + this.item.sys.id),
      ]);
      this.treasury = res[0].data.message;
      this.exec = _.get(res[1], "data");

      this.loaded = true;
      this.processing = false;
    } catch (err) {
      console.error(err);
    }
  },
};
</script>
