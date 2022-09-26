<template>
  <div v-if="ready">
    <template v-if="isNew"> <AppForm :url="membersURI" /></template>
    <template v-if="!isKycApproved && !isNew">
      <div class="pt-20 px-5 container">
        <div class="grid grid-cols-12">
          <div class="col-span-10">
            <p class="text-2xl mb-8 text-green-500">Application Recieved</p>
            <h1 class="text-2xl opacity-50 font-haffer">
              Thank you for providing us with information to verify your status
              as an accredited investor. You will be notified when you have been
              approved to submit an onboarding application to join Salon. Please
              reach out to
              <a class="bold underline" href="mailto:hello@salondao.xyz"
                >hello@salondao.xyz</a
              >
              with any questions.
            </h1>
          </div>
        </div>
      </div>
    </template>

    <template v-if="isKycApproved && !isApplied">
      <AppForm :url="onboardURI" />
    </template>
    <template v-if="isApplied && !isMember">
      <FormProposal :id="profile.onboardId"
    /></template>
  </div>
</template>
<script>
import AppForm from "@/components/AppForm";
import FormProposal from "@/components/FormProposal.vue";

export default {
  components: { AppForm, FormProposal },
  computed: {
    loaded() {
      return this.profile;
    },
    isNew() {
      if ("kycApproved" in this.profile) return false;
      if ("loading" in this.profile) return false;
      return true;
    },
    isKycApproved() {
      if (this.profile.kycApproved) return this.profile.kycApproved;
      return false;
    },
    isApplied() {
      if ("onboardId" in this.profile) return true;
      return false;
    },
    isMember() {
      if ("salonUnits" in this.profile) {
        return this.profile.salonUnits;
      }
      return false;
    },
    profile() {
      return this.$store.state.profile;
    },
    ready() {
      if (!("loading" in this.profile)) return true;
      return false;
    },
    membersURI() {
      return process.env.VUE_APP_URI + "/form/members";
    },
    onboardURI() {
      return process.env.VUE_APP_URI + "/form/onboard";
    },
  },
};
</script>
