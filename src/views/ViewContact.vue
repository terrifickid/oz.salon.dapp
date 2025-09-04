<template>
  <AppShell :isLoaded="loaded" :protected="false">
    <div
      v-if="loaded"
      class="grid grid-cols-12 pt-20 w-full font-haffer px-5 pb-48"
    >
      <div class="col-span-12 md:col-span-9 xl:col-span-7 text-2xl">
        <p class="mb-8" v-html="data.fields.title"></p>
        <div v-html="data.fields.code"></div>
        <div v-html="data.fields.code2"></div>
        <div id="contactForm">
          <form
            action="https://fund.us3.list-manage.com/subscribe/post?u=ba60d72b882bcc8cbf54db6b6&amp;id=dcce906d59&amp;f_id=0088dae0f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
          >
            <div id="mc_embed_signup_scroll">
              <div class="mc-field-group mb-4">
                <label for="mce-EMAIL" class="block mb-1">Email Address </label>
                <input
                  type="email"
                  name="EMAIL"
                  class="required email border border-black p-2 rounded"
                  id="mce-EMAIL"
                  value=""
                  required
                />
              </div>
              <div class="mc-field-group mb-4">
                <label for="mce-FNAME" class="block mb-1">First Name </label>
                <input
                  type="text"
                  name="FNAME"
                  class="text border border-black rounded p-2"
                  id="mce-FNAME"
                  value=""
                />
              </div>
              <div class="mc-field-group mb-4">
                <label for="mce-LNAME" class="block mb-1">Last Name </label>
                <input
                  type="text"
                  name="LNAME"
                  class="text border border-black rounded p-2"
                  id="mce-LNAME"
                  value=""
                />
              </div>
              <div id="mce-responses" class="clear">
                <div
                  class="response"
                  id="mce-error-response"
                  style="display: none"
                ></div>
                <div
                  class="response"
                  id="mce-success-response"
                  style="display: none"
                ></div>
              </div>
              <div aria-hidden="true" style="position: absolute; left: -5000px">
                <input
                  type="text"
                  name="b_ba60d72b882bcc8cbf54db6b6_dcce906d59"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div class="clear">
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  class="button border border-black p-2 cursor-pointer"
                  value="Subscribe"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="lg:col-span-4"></div>
  </AppShell>
</template>
<script>
import axios from "axios";
import AppShell from "@/components/AppShell";

export default {
  components: { AppShell },
  data() {
    return {
      data: {},
      loaded: false,
    };
  },
  async mounted() {
    try {
      const res = await axios.get(
        process.env.VUE_APP_URI + "/entry/HlkDGtPc9H5T6Eaxu51hI?cache=true"
      );
      this.data = res.data;
      this.loaded = true;
    } catch (error) {
      console.log("error", error);
    }
  },
};
</script>
<style scoped>
select {
  border: 0px;
  outline: 0px;
}
</style>
