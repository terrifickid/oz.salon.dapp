<template>
  <AppLoaderFull v-if="processing" />
  <div v-if="loaded">
    <p class="mt-4" v-if="statusMessage">
      <span class="opacity-50">Status</span><br />{{ statusMessage }}
    </p>
    <div class="my-8" v-if="!executionStatus && isAdmin">
      <AppButton @click="sendKick">Execute Kick</AppButton>
    </div>
    <div v-if="executionStatus == 'Completed'">
      <p class="py-4">
        At the time the proposal closed on {{ closedDate }}, {{ name }} had
        {{ units }} units. At that time, units were valued at
        {{ usd.format(bookValue) }} and {{ usd.format(currentTradePrice) }}.
      </p>
    </div>
  </div>
</template>
<script>
import _ from "lodash";
import axios from "axios";
import AppButton from "@/components/AppButton";
import AppLoaderFull from "@/components/AppLoaderFull";
export default {
  props: ["item"],
  components: { AppButton, AppLoaderFull },
  data() {
    return {
      exec: false,
      loaded: false,
      processing: false,
      usd: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }),
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
    executionStatus() {
      var status = _.get(this, "exec[0].fields.status");
      if (status) return status;
      return false;
    },
    statusMessage() {
      var msg;
      switch (this.executionStatus) {
        case "Pending":
          msg = "Kick Pending";
          break;
        case "Completed":
          msg = "Kicked";
          break;
        default:
          msg = false;
      }
      return msg;
    },
    closedDate() {
      var date = _.get(this, "item.sys.updatedAt");
      var d = new Date(date);
      return d.toLocaleString("default", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    },
    name() {
      try {
        var kicked = JSON.parse(_.get(this, "item.fields.member0member"));
        return kicked.firstName + " " + kicked.lastName;
      } catch (e) {
        return "";
      }
    },
    units() {
      try {
        var kicked = JSON.parse(_.get(this, "item.fields.member0member"));
        var weights = _.get(this, "item.fields.votes.weights");
        var u;
        weights.forEach((w) => {
          if (w.walletAddress == kicked.walletAddress) u = w.units;
        });
        return u;
      } catch (e) {
        return 0;
      }
    },
    bookValue() {
      var treasury = _.get(this, "item.fields.votes.treasury");
      return (
        (treasury.balance + treasury.collectionValue) / treasury.totalUnits
      );
    },
    currentTradePrice() {
      var p = _.get(this, "item.fields.votes.treasury.currentTradePrice");
      return p;
    },
  },
  methods: {
    async sendKick() {
      try {
        this.processing = true;
        var res = await this.submitExecution(this.item.sys.id, "kick", {});

        if (res.result === false) {
          var e = JSON.parse(res.message);
          alert("Error: " + _.get(e, "details.errors[0].details"));
        } else {
          window.location.reload();
        }
      } catch (err) {
        console.error(err);
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
