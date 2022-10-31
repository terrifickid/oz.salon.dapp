<template>
  <div class="mb-32" v-if="!exec && isAdmin">
    <AppButton @click="sendKick">Execute Kick</AppButton>
  </div>
  <div class="mb-32 text-xs" v-if="exec">
    <hr class="mb-2" />
    <p class="mb-2">The kick has been executed.</p>
    <p class="mb-2">
      NAME was found to be in violation of Salon's operating agreement. A
      majority of members voted to kick NAME on DATE KICK PROPOSAL ENDED at TIME
      KICK PROPOSAL ENDED.
    </p>

    <p class="mb-2">
      The book value of Salon units on DATE at TIME was $PRICE per unit. At that
      time, NAME'S units were valued at $VALUE OF NAME'S UNITS AT BOOK VALUE AT
      TIME KICK PROPOSAL ENDED.
    </p>

    <p class="mb-2">
      The financial committee will be in touch with NAME to arrange a payout
      when funds are available.
    </p>

    <p class="mb-2">NAME'S unit holdings have been eliminated.</p>
  </div>
</template>
<script>
import _ from "lodash";
import axios from "axios";
export default {
  props: ["item"],
  data() {
    return {
      exec: false,
    };
  },
  computed: {
    uri() {
      return process.env.VUE_APP_URI + "/form/executions";
    },
    isAdmin() {
      return _.get(this.profile, "role") == "Admin";
    },
    profile() {
      return this.$store.state.profile;
    },
  },
  methods: {
    async sendKick() {
      try {
        var res = await this.submitExecution(this.id, {});
        if (res.result === false) {
          var e = JSON.parse(res.message);
          alert("Error: " + _.get(e, "details.errors[0].details"));
        }
      } catch (err) {
        console.error(err);
      }
      window.location.reload();
    },
  },
  async mounted() {
    try {
      console.log("Load Exec!");
      var res = await axios.get(
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
