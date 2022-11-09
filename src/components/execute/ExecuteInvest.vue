<template>
  <div>
    <AppLoaderFull v-if="processing" />
    <div v-if="loaded">
      <p class="mb-8">
        <span class="opacity-50">Status</span><br />{{ statusMessage }}
      </p>

      <div v-if="!executionStatus && ownsProposal">
        <div
          class="bg-gray-100 px-3 py-4 mb-2 flex items-start cursor-pointer"
          @click="method = 'usdc'"
        >
          <div class="flex items-start mr-4">
            <input
              id="default-checkbox"
              type="radio"
              value="usdc"
              class="w-4 h-4 outline-none radio"
              v-model="method"
              style="margin-top: 1px"
            />
          </div>
          <div>
            <p>Fund with USDC (Digital Wallet)</p>
            <div :class="{ active: method == 'usdc' }" class="collapse">
              <div>
                <p class="mt-8 mb-4">
                  To invest by digital wallet, ensure you have enough USDC and a
                  small amount of ETH to cover network gas fees.
                </p>
                <AppButton
                  @click="sendUSDC(0.001)"
                  :disabled="processing"
                  class="mb-4"
                  >Send USDC</AppButton
                >
              </div>
            </div>
          </div>
        </div>
        <div
          class="bg-gray-100 px-3 py-4 mb-2 flex items-start cursor-pointer"
          @click="method = 'wire'"
        >
          <div class="flex items-start mr-4">
            <input
              id="default-checkbox"
              type="radio"
              value="wire"
              class="w-4 h-4 outline-none radio"
              style="margin-top: 1px"
              v-model="method"
            />
          </div>
          <div>
            <span>Fund with Bank Wire (FIAT)</span>
            <div :class="{ active: method == 'wire' }" class="collapse">
              <div>
                <p class="mt-6">Domestic Wire Instructions</p>
                <div class="mt-2 mr-8">
                  <p class="text-sm mb-2">Beneficiary</p>
                  <table class="text-sm w-full">
                    <tr>
                      <td valign="top" class="opacity-50">Beneficiary Name</td>
                      <td valign="top">Salon DAO, LLC</td>
                    </tr>
                    <tr>
                      <td valign="top" class="opacity-50">Account Number</td>
                      <td valign="top">9801010967</td>
                    </tr>
                    <tr>
                      <td valign="top" class="opacity-50">Type of Account</td>
                      <td valign="top">Checking</td>
                    </tr>
                    <tr>
                      <td valign="top" class="opacity-50">
                        Beneficiary Address
                      </td>
                      <td valign="top">
                        228 Park Avenue South, PMB 21512 New York, NY 10003
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2">
                        <p class="mt-2 text-sm mb-2">Receiving Bank Details</p>
                      </td>
                    </tr>
                    <tr>
                      <td valign="top" class="opacity-50">
                        ABA Routing Number
                      </td>
                      <td valign="top">084106768</td>
                    </tr>
                    <tr>
                      <td valign="top" class="opacity-50">Bank Name</td>
                      <td valign="top">Evolve Bank & Trust</td>
                    </tr>
                    <tr>
                      <td valign="top" class="opacity-50">Bank Address</td>
                      <td valign="top">
                        6070 Poplar Ave, Suite 200 Memphis, TN 38119
                      </td>
                    </tr>
                    <tr>
                      <td valign="top" class="opacity-50">Memo Field</td>
                      <td valign="top">{{ wireCode }}</td>
                    </tr>

                    <tr>
                      <td colspan="2">
                        <p class="mt-4 text-xs pt-2">
                          *Including the above code in the Memo Field is
                          critical to properly receiving your funds.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2">
                        <p class="mt-12">Foreign Wire Instructions</p>
                        <div class="mt-2 mr-8">
                          <p class="text-sm mb-2">
                            Receiving Bank | 57D Account with Institution
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td valign="top" class="opacity-50">SWIFT / BIC Code</td>
                      <td valign="top">
                        FRNAUS44XXX<br /><span class="text-xs"
                          >(Remove the trailing XXX if you are asked for an
                          eight-digit code)</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td valign="top" class="opacity-50">Bank Name</td>
                      <td valign="top">First National Bankers Bank</td>
                    </tr>
                    <tr>
                      <td valign="top" class="opacity-50">Bank Address</td>
                      <td valign="top">
                        7813 Office Park Blvd, Baton Rouge, LA, 70809 USA
                      </td>
                    </tr>

                    <tr>
                      <td colspan="2" valign="top">
                        <p class="text-sm my-2">
                          Beneficiary | 59 Beneficiary Customer Name & Address
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td valign="top" class="opacity-50">
                        IBAN / Account Number
                      </td>
                      <td valign="top">084106768</td>
                    </tr>
                    <tr>
                      <td valign="top" class="opacity-50">Beneficiary Name</td>
                      <td valign="top">Evolve Bank & Trust</td>
                    </tr>
                    <tr>
                      <td class="opacity-50">Beneficiary Address</td>
                      <td>6070 Poplar Ave, Suite 200, Memphis, TN 38119</td>
                    </tr>

                    <tr>
                      <td colspan="2" valign="top">
                        <p class="text-sm my-2">Reference Field</p>
                      </td>
                    </tr>

                    <tr>
                      <td valign="top" class="opacity-50">
                        <span>70 Remittance Information</span>
                      </td>
                      <td valign="top">
                        Account 9801010967 for Salon DAO, LLC at Evolve Bank &
                        Trust
                      </td>
                    </tr>

                    <tr>
                      <td valign="top" class="pr-12 opacity-50">
                        72 Sender to Receiver Information
                      </td>
                      <td valign="top">{{ wireCode }}</td>
                    </tr>

                    <tr>
                      <td colspan="2">
                        <p class="mt-4 text-xs pt-2">
                          *Including the above information for Line 70 and Line
                          72 is critical to properly receiving your funds.
                        </p>
                      </td>
                    </tr>
                  </table>
                </div>

                <AppButton
                  @click="sendWire"
                  :disabled="processing"
                  class="my-2 mt-6"
                  >I have sent the wire with code "{{ wireCode }}" in the Memo
                  Field
                </AppButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import _ from "lodash";
import axios from "axios";
import { ethers } from "ethers";
import AppButton from "@/components/AppButton";
import AppLoaderFull from "@/components/AppLoaderFull.vue";
export default {
  components: { AppButton, AppLoaderFull },
  props: ["proposal"],
  data() {
    return {
      method: null,
      processing: true,
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
    walletAddress() {
      return this.$store.state.walletAddress;
    },
    ownsProposal() {
      return (
        _.get(this.proposal, "fields.profile.walletAddress") ==
        this.walletAddress
      );
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
          msg = "Funding processing";
          break;
        case "Completed":
          msg = "Funding received";
          break;
        case "Expired":
          msg = this.executionStatus;
          break;
        case "Cancelled":
          msg = this.executionStatus;
          break;
        default:
          msg = "Not yet funded";
      }
      return msg;
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
      return this.type + _.get(this.proposal, "fields.prettyId");
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
      this.processing = true;
      //executions
      try {
        await this.submitExecution(this.proposal.sys.id, this.type, {
          sourceType: "wire",
          source: this.wireCode,
        });
        window.location.reload();
      } catch (e) {
        alert("Error!");
        console.error(e);
      }
      this.processing = false;
    },
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
      try {
        let ethereum = window.ethereum;
        let provider = new ethers.providers.Web3Provider(ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        var amt = ethers.utils.parseUnits(value.toString(), 6).toNumber();
        const usdcContract = new ethers.Contract(
          usdc.address,
          usdc.abi,
          signer
        );
        //  var amt = ethers.utils.parseUnits(Number(1).toFixed(1), 6).toNumber();
        let balance = await usdcContract.balanceOf(this.walletAddress);
        var busdc = parseFloat(ethers.utils.formatUnits(balance.toString(), 6));
        console.log("balance is", busdc);
        if (value > busdc) throw { message: "Insufficient USDC balance" };
        let transfer = await usdcContract.transfer(
          "0xc0725b883d23F146F82d49f3BA45A6b4c7DDD7Ce",
          amt
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
        alert(err.message);
        this.processing = false;
        console.error(err);
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
      this.processing = false;
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

.radio {
  accent-color: black;
}
</style>
