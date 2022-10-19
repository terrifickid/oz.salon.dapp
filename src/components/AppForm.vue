<template>
  <AppLoader v-show="processing" />
  <div
    v-show="!processing"
    v-if="ready"
    ref="fullpage"
    class="pt-20 px-5 container pb-64"
  >
    <div class="grid grid-cols-12">
      <div class="col-span-12 lg:col-span-8">
        <div class="text-2xl mb-6">{{ name }}</div>
        <ul class="text-2xl mb-12" v-show="selectedIndex > -1">
          <li
            v-for="(field, index) in fields"
            :key="index"
            class="inline-block items-center mr-2 cursor-pointer"
            :class="{ 'opacity-50': selectedIndex < index }"
            @click="selectedIndex = index"
          >
            <span class="flex items-center">
              {{ field.name }}
              <svg
                v-if="fields.length - 1 != index"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 ml-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </span>
          </li>
        </ul>
        <div v-show="selectedIndex == -1">
          <FormIntro :name="name" :description="description" @ready="next" />
        </div>
        <div v-show="selectedIndex == 1000" class="text-2xl">
          <span class="text-green-500"
            >Your {{ name }} proposal has been successfully submited.</span
          >
          <p class="opacity-50 mt-20">
            <router-link to="/manage/start" class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
              Return to Overview</router-link
            >
          </p>
        </div>
        <template v-for="(field, index) in fields" :key="index">
          <div v-show="selectedIndex == index">
            <FormField
              :field="field"
              @ready="next"
              @back="back"
              :index="index"
              v-model="form[field.id]"
            />
          </div>
        </template>
      </div>
    </div>
  </div>
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
      selectedIndex: -1,
    };
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
  },
  methods: {
    async back() {
      console.log("back!");
      this.selectedIndex--;
    },
    async next() {
      if (await this.validate()) {
        this.submitForm();
      } else {
        console.log("next");
        //this.selectedIndex++;
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
          this.selectedIndex = i;
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
          this.selectedIndex = 1000;
          this.processing = false;
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
      //  this.$refs.fullpage.api.reBuild();
    },
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.resize);
  },
  async mounted() {
    try {
      const res = await axios.get(this.url);
      this.name = res.data.name;
      this.description = res.data.description;
      this.fields = res.data.fields.filter(function (field) {
        var disabled = [
          "votes",
          "kycApproved",
          "kycNotified",
          "units",
          "onboardProposal",
          "profile",
          "role",
          "delegate",
          "biography",
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
