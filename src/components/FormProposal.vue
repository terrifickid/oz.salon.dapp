<template>
  <div class="grid grid-cols-12" v-if="'fields' in proposal">
    <div class="col-span-12">
      <form class="flex items-center">
        <div class="w-screen">
          <label
            class="flex block text-3xl md:text-4xl mb-4 items-center justify-left"
            ><span class="text-sm mr-1">1</span>
            <svg height="10" width="11" class="mr-4">
              <path
                class="fill-electric"
                d="M7.586 5L4.293 1.707 5.707.293 10.414 5 5.707 9.707 4.293 8.293z"
              ></path>
              <path d="M8 4v2H0V4z"></path></svg
            >{{ proposal.fields.proposalType["en-US"][0] }}<br />#{{
              id
            }}*</label
          >
          <ul class="flex">
            <li class="mr-4">
              <span class="text-xs">vote start: </span
              >{{ proposal.fields.startDate["en-US"] }}
            </li>
            <li>
              <span class="text-xs">vote end: </span
              >{{ proposal.fields.endDate["en-US"] }}
            </li>
          </ul>
          <div class="grid grid-cols-12">
            <div class="col-span-6">
              <p class="text-2xl my-4">
                {{ proposal.fields.meta["en-US"].usdc }} for
                {{ proposal.fields.meta["en-US"].s }} Salon units
              </p>

              <p class="text-2xl my-4">
                {{ proposal.fields.meta["en-US"].profile.firstName["en-US"]
                }}<br />
                {{ proposal.fields.meta["en-US"].profile.lastName["en-US"]
                }}<br />
              </p>
              <p class="text-sm mt-12">
                {{ proposal.fields.meta["en-US"].profile.walletAddress["en-US"]
                }}<br />
                {{
                  proposal.fields.meta["en-US"].profile.emailAddress["en-US"]
                }}
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  components: {},
  props: ["id"],
  data() {
    return {
      proposal: {},
    };
  },
  async beforeMount() {
    console.log("loading proposal!");
    try {
      const res = await axios.get(
        "https://salontest-terrifickid.cloud.okteto.net/entry/" + this.id
      );
      this.proposal = res.data;
    } catch (error) {
      console.log("error", error);
    }
  },
};
</script>
