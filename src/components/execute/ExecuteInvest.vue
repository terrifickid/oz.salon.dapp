<template>
  <div v-if="loaded">
    <div v-if="!executionStatus">
      <div
        class="border border-black p-3 mb-2 flex items-center cursor-pointer"
        @click="method = 'usdc'"
      >
        <div class="flex items-start mr-4">
          <input
            id="default-checkbox"
            type="radio"
            value="usdc"
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            v-model="method"
          />
        </div>
        <div>
          <p class="font-bold">Fund with USDC (Digital Wallet)</p>
          <div :class="{ active: method == 'usdc' }" class="collapse">
            <div>
              <p class="mb-2"></p>
              <AppButton @click="sendUSDC" :disabled="processing" class="my-2"
                >Send USDC</AppButton
              >
            </div>
          </div>
        </div>
      </div>
      <div
        class="border border-black p-3 mb-2 flex items-center cursor-pointer"
        @click="method = 'wire'"
      >
        <div class="flex items-start mr-4">
          <input
            id="default-checkbox"
            type="radio"
            value="wire"
            class="w-4 h-4"
            v-model="method"
          />
        </div>
        <div>
          <b>Fund with Bank Wire (FIAT)</b>
          <div :class="{ active: method == 'wire' }" class="collapse">
            <div>
              <p class="text-lg mt-6 font-bold">Domestic Wire Instructions</p>
              <div class="mt-2 mr-8">
                <p class="font-bold text-sm mb-2">Beneficiary</p>
                <table class="text-sm w-full">
                  <tr>
                    <td valign="top">Beneficiary Name</td>
                    <td valign="top">Salon DAO, LLC</td>
                  </tr>
                  <tr>
                    <td valign="top">Account Number</td>
                    <td valign="top">9801010967</td>
                  </tr>
                  <tr>
                    <td valign="top">Type of Account</td>
                    <td valign="top">Checking</td>
                  </tr>
                  <tr>
                    <td valign="top">Beneficiary Address</td>
                    <td valign="top">
                      228 Park Avenue South, PMB 21512 New York, NY 10003
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <p class="mt-2 font-bold text-sm mb-2">
                        Receiving Bank Details
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td valign="top">ABA Routing Number</td>
                    <td valign="top">084106768</td>
                  </tr>
                  <tr>
                    <td valign="top">Bank Name</td>
                    <td valign="top">Evolve Bank & Trust</td>
                  </tr>
                  <tr>
                    <td valign="top">Bank Address</td>
                    <td valign="top">
                      6070 Poplar Ave, Suite 200 Memphis, TN 38119
                    </td>
                  </tr>
                  <tr>
                    <td valign="top">Memo Field</td>
                    <td valign="top">{{ wireCode }}</td>
                  </tr>
                </table>
              </div>

              <tr>
                <td colspan="2">
                  <p class="mt-4 text-xs border-white border-t pt-2">
                    *Including the above code in the Memo Field is critical to
                    properly receiving your funds.
                  </p>
                </td>
              </tr>

              <p class="text-lg mt-6 font-bold">Foreign Wire Instructions</p>
              <div class="mt-2 mr-8">
                <p class="font-bold text-sm mb-2">
                  Receiving Bank | 57D Account with Institution
                </p>
                <table class="text-sm w-full">
                  <tr>
                    <td valign="top">SWIFT / BIC Code</td>
                    <td valign="top">
                      FRNAUS44XXX<br /><span class="text-xs"
                        >(Remove the trailing XXX if you are asked for an
                        eight-digit code)</span
                      >
                    </td>
                  </tr>
                  <tr>
                    <td valign="top">Bank Name</td>
                    <td valign="top">First National Bankers Bank</td>
                  </tr>
                  <tr>
                    <td valign="top">Bank Address</td>
                    <td valign="top">
                      7813 Office Park Blvd, Baton Rouge, LA, 70809 USA
                    </td>
                  </tr>

                  <tr>
                    <td colspan="2" valign="top">
                      <p class="font-bold text-sm my-2">
                        Beneficiary | 59 Beneficiary Customer Name & Address
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td valign="top">IBAN / Account Number</td>
                    <td valign="top">084106768</td>
                  </tr>
                  <tr>
                    <td valign="top">Beneficiary Name</td>
                    <td valign="top">Evolve Bank & Trust</td>
                  </tr>
                  <tr>
                    <td>Beneficiary Address</td>
                    <td>6070 Poplar Ave, Suite 200, Memphis, TN 38119</td>
                  </tr>

                  <tr>
                    <td colspan="2" valign="top">
                      <p class="font-bold text-sm my-2">Reference Field</p>
                    </td>
                  </tr>

                  <tr>
                    <td valign="top">
                      <span>70 Remittance Information</span>
                    </td>
                    <td valign="top">
                      Account 9801010967 for Salon DAO, LLC at Evolve Bank &
                      Trust
                    </td>
                  </tr>

                  <tr>
                    <td valign="top" class="pr-12">
                      72 Sender to Receiver Information
                    </td>
                    <td valign="top">{{ wireCode }}</td>
                  </tr>

                  <tr>
                    <td colspan="2">
                      <p class="mt-4 text-xs border-white border-t pt-2">
                        *Including the above information for Line 70 and Line 72
                        is critical to properly receiving your funds.
                      </p>
                    </td>
                  </tr>
                </table>
              </div>

              <AppButton
                @click="sendWire"
                :disabled="processing"
                class="my-2 mt-6"
                >I have sent the wire with <span>'{{ wireCode }}'</span> in the
                memo field</AppButton
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="executionStatus == 'Completed'">
      <p class="mb-2">Your investment is complete.</p>
      <p class="mb-2">
        You sent {{ format.format(amount) }} to Salon's treasury in exchange for
        {{ units }} units.
      </p>
      <p>Unit holdings have been updated in your profile.</p>
    </div>
    <div v-else>
      {{ executionStatus }}
    </div>
  </div>
</template>
<script>
import _ from "lodash";
import axios from "axios";
import { ethers } from "ethers";
import AppButton from "@/components/AppButton";
export default {
  components: { AppButton },
  props: ["proposal"],
  data() {
    return {
      method: null,
      processing: false,
      exec: false,
      loaded: false,
      format: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }),
    };
  },
  computed: {
    type() {
      return _.get(this, "proposal.sys.contentType.sys.id");
    },
    uri() {
      return process.env.VUE_APP_URI + "/form/executions";
    },
    executionStatus() {
      var status = _.get(this, "exec[0].fields.status");
      if (status) return status;
      return false;
    },
    usdcContractAddress() {
      return process.env.VUE_APP_USDC_CONTRACT;
    },
    units() {
      return JSON.parse(this.proposal.fields.units0units).units;
    },
    amount() {
      return JSON.parse(this.proposal.fields.units0units).amount;
    },
    wireCode() {
      return (
        _.get(this.proposal, "fields.profile.lastName") +
        _.get(this.proposal, "fields.profile.walletAddress").substr(-4)
      );
    },
  },
  methods: {
    async submitExecution(id, type, obj) {
      console.log("Sending Ex");
      const res = await axios.post(this.uri, {
        proposal: id,
        type: type,
        data: obj,
      });
      return res.data;
    },
    async sendWire() {
      //executions
      var res = await this.submitExecution(this.proposal.sys.id, this.type, {
        sourceType: "wire",
        source: this.wireCode,
      });
      console.log(res);
    },
    async sendUSDC() {
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
      try {
        let ethereum = window.ethereum;
        let provider = new ethers.providers.Web3Provider(ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        //  var amt = ethers.utils.parseUnits(value.toString(), 6).toNumber();
        const usdcContract = new ethers.Contract(
          usdc.address,
          usdc.abi,
          signer
        );
        //  var amt = ethers.utils.parseUnits(Number(1).toFixed(1), 6).toNumber();

        let transfer = await usdcContract.transfer(
          "0xc0725b883d23F146F82d49f3BA45A6b4c7DDD7Ce",
          1
        );
        var res = await this.submitExecution(this.proposal.sys.id, this.type, {
          sourceType: "usdc",
          source: transfer.hash,
        });
        if (res.result === false) {
          console.error(res.message);
        } else {
          console.log(res.result);
        }
        window.location.reload();
      } catch (err) {
        this.processing = false;
      }
    },
  },
  async mounted() {
    try {
      console.log("Load Exec!");
      var res = await axios.get(
        process.env.VUE_APP_URI + "/execution/" + this.proposal.sys.id
      );
      this.exec = _.get(res, "data");
      console.log(res);
      console.log(this.exec, this.proposal.sys.id);
      this.loaded = true;
    } catch (err) {
      console.error(err);
    }
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
  max-height: 400vh;
}
</style>
