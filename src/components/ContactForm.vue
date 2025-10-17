<template>
  <div id="contactForm">
    <p class="mb-2">Newsletter</p>
    <form
      action="https://fund.us3.list-manage.com/subscribe/post?u=ba60d72b882bcc8cbf54db6b6&amp;id=dcce906d59&amp;f_id=0088dae0f0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      class="validate"
      target="_blank"
    >
      <div id="mc_embed_signup_scroll">
        <div class="mc-field-group mb-1">
          <input
            type="email"
            name="EMAIL"
            class="font-haffer sm:ml-0 block text-black outline-none placeholder-opb bg-gray-100"
            id="mce-EMAIL"
            value=""
            required
            placeholder="Email Address"
          />
        </div>
        <div class="mc-field-group mb-1">
          <input
            type="text"
            name="FNAME"
            class="font-haffer sm:ml-0 block text-black outline-none placeholder-opb bg-gray-100"
            id="mce-FNAME"
            value=""
            placeholder="First Name"
          />
        </div>
        <div class="mc-field-group mb-1">
          <input
            type="text"
            name="LNAME"
            class="font-haffer sm:ml-0 block text-black outline-none placeholder-opb bg-gray-100"
            id="mce-LNAME"
            value=""
            placeholder="Last Name"
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
        <div class="clear mt-4 text-base">
          <AppButton>Sign Up</AppButton>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import AppButton from "@/components/AppButton.vue";
export default {
  components: { AppButton },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  async beforeMount() {},
};
</script>
