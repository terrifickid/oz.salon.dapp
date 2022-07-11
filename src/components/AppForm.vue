<template>
  <AppLoader v-show="processing" />
  <full-page
    v-show="!processing"
    v-if="ready"
    ref="fullpage"
    :options="options"
    class="pr-16"
  >
    <div class="section">
      <FormIntro :name="name" :description="description" @ready="next" />
    </div>
    <template v-for="(field, index) in fields" :key="index">
      <div class="section">
        <FormField
          :field="field"
          @ready="next"
          :index="index"
          v-model="form[field.id]"
        />
      </div>
    </template>
  </full-page>
</template>
<script>
import axios from "axios";
import FormField from "@/components/Form/FormField.vue";
import FormIntro from "@/components/Form/FormIntro.vue";
import AppLoader from "@/components/AppLoader.vue";
export default {
  components: { FormField, AppLoader, FormIntro },
  props: ["url"],
  emits: ["success", "ready"],
  data() {
    return {
      name: "",
      description: "",
      ready: false,
      processing: true,
      btnTxt: "Submit",
      fields: [],
      form: {},
      sending: false,
      options: {
        licenseKey: "K9EP6-N164H-2BKM8-MJLGI-KSURM",
        controlArrows: true,
        scrollBar: false,
        scrollingSpeed: 500,
        navigation: true,
        navigationPosition: "right",
      },
    };
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
  },
  methods: {
    async next() {
      if (await this.validate()) {
        this.submitForm();
      } else {
        console.log("next");
        //this.$refs.fullpage.api.moveSectionDown();
      }
    },
    async validate() {
      console.log("validate form!");
      var i = 0;
      var error = false;
      for (let field of this.fields) {
        if (this.form[field.id] == "") error = true;
        if (!([field.id] in this.form)) error = true;
        if (error) {
          this.$refs.fullpage.api.moveTo(i + 2);
          break;
        }
        i++;
      }
      console.log("error is", error);
      if (error) return false;
      return true;
    },
    async submitForm() {
      this.processing = true;
      console.log("Ran Submit!");
      try {
        this.form.profile = this.profile;
        const res = await axios.post(this.url, this.form);
        if (res.data.result) {
          console.log("success", res.data);
          this.$emit("success");
          this.$store.dispatch("connect");
        } else {
          alert("Error, Please try again.");
          this.processing = false;
          console.log("error", res.data);
        }
      } catch (error) {
        this.processing = false;
        console.log("error", error);
      }
    },
    async resize() {
      //alert("resize!");
      this.$refs.fullpage.api.reBuild();
    },
  },
  mounted() {
    console.log("mounted!");
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.resize);
  },
  async beforeMount() {
    try {
      const res = await axios.get(this.url);
      console.log("form", res.data);
      this.name = res.data.name;
      this.description = res.data.description;
      this.fields = res.data.fields.filter(function (field) {
        var disabled = [
          "votes",
          "kycApproved",
          "units",
          "onboardProposal",
          "profile",
        ];
        if (disabled.includes(field.id)) return false;
        return true;
      });

      this.$emit("ready");
      this.ready = true;
      this.processing = false;
      window.addEventListener("resize", this.resize);
    } catch (error) {
      console.log("error", error);
    }
  },
};
</script>
