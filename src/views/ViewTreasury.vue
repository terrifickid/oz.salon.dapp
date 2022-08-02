<template>
  <AppShell :colors="colors" :isLoaded="isDone" :protected="true">
    <AppContent class="items-center justify-center font-haffer">
      <div class="grid grid-cols-12 w-full font-haffer">
        <div class="app-frame">
          <div class="border-b border-black p-1 text-xs sm:text-base">
            <span>Appraised Collection Value</span
            ><span class="float-right">{{
              format.format(treasury.collectionValue)
            }}</span>
          </div>
          <div class="border-b border-black p-1 text-xs sm:text-base">
            <span>Bank Account Funds</span
            ><span class="float-right">{{
              format.format(treasury.balance)
            }}</span>
          </div>

          <div class="border-b border-black p-1 text-xs sm:text-base">
            <span>Digital Wallet Funds</span
            ><span class="float-right">
              {{ format.format(balanceInUsdc) }}
            </span>
          </div>
          <div class="border-b border-black p-1 text-xs sm:text-base">
            <span>Total Book Value</span
            ><span class="float-right">{{
              format.format(treasury.collectionValue + treasury.balance)
            }}</span>
          </div>
          <div class="border-b border-black p-1 text-xs sm:text-base">
            <span>Total Units Issued</span
            ><span class="float-right">{{ treasury.totalUnits }}</span>
          </div>
          <div class="border-b border-black p-1 text-xs sm:text-base">
            <span>Book Value Per Unit</span
            ><span class="float-right">
              {{
                format.format(
                  (treasury.collectionValue + treasury.balance) /
                    treasury.totalUnits
                )
              }}</span
            >
          </div>
          <div class="border-b border-black p-1 text-xs sm:text-base">
            <span>Suggested Trading Value Per Unit</span
            ><span class="float-right">
              {{
                format.format(
                  ((treasury.collectionValue + treasury.balance) /
                    treasury.totalUnits) *
                    1.25
                )
              }}</span
            >
          </div>
        </div>
      </div>
    </AppContent>
  </AppShell>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import AppShell from "@/components/AppShell";
import AppContent from "@/components/AppContent";
import { ethers } from "ethers";
import { abi as USDC_ABI } from "@/abi/usdc";
export default {
  components: { AppShell, AppContent },
  data() {
    return {
      colors: ["white", "black"],
      treasury: {},
      balanceInEth: 0,
      balanceInUsdc: 0,
      format: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }),
      isDone: false,
    };
  },
  async beforeMount() {
    console.log("treasury load!");
    //Treasury Data
    try {
      const res = await axios.get(
        process.env.VUE_APP_URI + "/treasury?cache=true"
      );
      this.treasury = res.data.message;
    } catch (error) {
      console.log("error", error);
    }

    //ETH Balance
    let ethereum = window.ethereum;
    let provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    await provider.send("eth_requestAccounts", []);
    const eth = await provider.getBalance(
      "0xc0725b883d23f146f82d49f3ba45a6b4c7ddd7ce"
    );
    this.balanceInEth = ethers.utils.formatEther(eth);

    //USDC Balance
    var usdc = {
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      abi: USDC_ABI,
    };

    const usdcContract = new ethers.Contract(usdc.address, usdc.abi, signer);
    let usdcBalance = await usdcContract.balanceOf(
      "0xc0725b883d23f146f82d49f3ba45a6b4c7ddd7ce"
    );
    this.balanceInUsdc = parseInt(usdcBalance.toString()) / 10 ** 6;
    this.isDone = true;
  },
};
</script>
