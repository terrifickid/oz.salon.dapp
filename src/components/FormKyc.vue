<template>
  <form className="form lowercase" v-on:submit.prevent="submitForm">
    <h1>kyc verification</h1>

    <label
      htmlFor="type_of_entity"
      className="formbuilder-radio-group-label form__input-row-label"
    >
      Type of Entity
    </label>

    <input
      name="type_of_entity"
      id="type_of_entity-0"
      aria-="true"
      value="person"
      type="radio"
    />
    <span htmlFor="type_of_entity-0"> Person</span>

    <p>
      <input
        name="type_of_entity"
        id="type_of_entity-1"
        aria-="true"
        value="company"
        type="radio"
      />
      <span htmlFor="type_of_entity-1"> Company</span>
    </p>
    <p>
      <input
        name="type_of_entity"
        id="type_of_entity-2"
        aria-="true"
        value="trust"
        type="radio"
      />
      <span htmlFor="type_of_entity-2"> Trust</span>
    </p>
    <label
      htmlFor="walletAddress"
      className="formbuilder-text-label form__input-row-label"
    >
      Wallet Address
    </label>
    <input
      type="text"
      name="walletAddress"
      id="walletAddress"
      aria-="true"
      :value="userAddress"
    />

    <label
      htmlFor="legal_name_of_person"
      className="formbuilder-text-label form__input-row-label"
    >
      Legal Name of Person
    </label>
    <input
      type="text"
      name="legalNameOfPerson"
      id="legalNameOfPerson"
      aria-="true"
      v-model="legalNameOfPerson"
    />

    <label
      htmlFor="email_address"
      className="formbuilder-text-label form__input-row-label"
    >
      Email Address
    </label>
    <input type="text" name="email_address" id="email_address" aria-="true" />

    <label
      htmlFor="text-1650421756581"
      className="formbuilder-text-label form__input-row-label"
    >
      Home Address
    </label>
    <input
      type="text"
      className="form-control"
      name="text-1650421756581"
      id="text-1650421756581"
      aria-="true"
    />

    <label
      htmlFor="text-1650421756581"
      className="formbuilder-text-label form__input-row-label"
    >
      Date of Birth
    </label>

    <select
      className="form-control"
      name="DOB_month"
      id="select-1650421785515"
      aria-="true"
    >
      <option value="01" id="select-1650421785515-0">01</option>
      <option value="02" id="select-1650421785515-1">02</option>
      <option value="03" id="select-1650421785515-2">03</option>
    </select>

    <select name="DOB_day" id="day" aria-="true">
      <option value="01" id="day-0">01</option>
      <option value="02" id="day-1">02</option>
      <option value="03" id="day-2">03</option>
    </select>

    <select name="DOB_year" id="year" aria-="true">
      <option value="2000" id="year-0">2000</option>
      <option value="2001" id="year-1">2001</option>
      <option value="2003" id="year-2">2003</option>
    </select>

    <p>
      <label htmlFor="id_scan" className="formbuilder-file-label">
        ID Scan
      </label>
    </p>
    <p>
      A passport is highly recommended but other forms of government–issued
      color photo ID (such as a national identity card or driver’s license) are
      also acceptable.
    </p>
    <p>
      <input type="file" name="id_scan" id="id_scan" aria-="true" />
    </p>

    <p>
      <label
        htmlFor="back_of_id_scan"
        className="formbuilder-file-label form__input-row-label"
      >
        Back of ID Scan (Optional)
      </label>
    </p>
    <p>Not if you uploaded a passport above.</p>
    <p>
      <input type="file" name="back_of_id_scan" id="back_of_id_scan" />
    </p>

    <label
      htmlFor="passport_or_id_number"
      className="formbuilder-text-label form__input-row-label"
    >
      Passport or ID Number
    </label>
    <input
      type="text"
      name="passport_or_id_number"
      id="passport_or_id_number"
      aria-="true"
    />

    <label
      htmlFor="Phone-Number"
      className="formbuilder-text-label form__input-row-label"
    >
      Phone Number
    </label>
    <input type="text" name="Phone-Number" id="Phone-Number" aria-="true" />

    <label
      htmlFor="occupation"
      className="formbuilder-text-label form__input-row-label"
    >
      Occupation
    </label>
    <input
      type="text"
      className="form-control"
      name="occupation"
      id="occupation"
      aria-="true"
    />

    <h3>How are you accredited?</h3>

    <label
      htmlFor="basis_of_accreditation"
      className="formbuilder-radio-group-label form__input-row-label"
    >
      Basis of Accreditation
    </label>

    <input
      name="basis_of_accreditation"
      id="basis_of_accreditation-0"
      aria-="true"
      value="income"
      type="radio"
    />
    <label htmlFor="basis_of_accreditation-0">
      Income of $200k ($300K with spouse) in each of the last 2 years
    </label>

    <input
      name="basis_of_accreditation"
      id="basis_of_accreditation-1"
      aria-="true"
      value="net-worth"
      type="radio"
    />
    <label htmlFor="basis_of_accreditation-1"> Net worth over $1M </label>

    <h3>Your income in the most recent tax year</h3>

    <label
      htmlFor="income_recent"
      className="formbuilder-text-label form__input-row-label"
    >
      Income
    </label>
    <input type="text" name="income_recent" id="income_recent" aria-="true" />

    <p>
      <label
        htmlFor="income_recent_documentation"
        className="formbuilder-file-label form__input-row-label"
      >
        Documentation
      </label>
    </p>
    <p>
      Government tax filings, pay stubs, or a letter from your attorney,
      accountant, or investment advisor written in the last 90 days (upload pdf,
      docx).
    </p>
    <p>
      <input
        type="file"
        name="income_recent_documentation"
        id="income_recent_documentation"
        aria-="true"
      />
    </p>

    <h3>Your income in the previous tax year</h3>

    <label
      htmlFor="income_last"
      className="formbuilder-text-label form__input-row-label"
    >
      Income
    </label>
    <input type="text" name="income_last" id="income_last" aria-="true" />

    <p>
      <label
        htmlFor="income_last_documentation"
        className="formbuilder-file-label form__input-row-label"
      >
        Documenation
      </label>
    </p>
    <p>
      Government tax filings, pay stubs, or a letter from your attorney,
      accountant, or investment advisor written in the last 90 days (upload pdf,
      docx).
    </p>
    <p>
      <input
        type="file"
        name="income_last_documentation"
        id="income_last_documentation"
        aria-="true"
      />
    </p>

    <label
      htmlFor="current_year_income"
      className="formbuilder-checkbox-group-label form__input-row-label"
    >
      Current Year Income
    </label>

    <input
      name="current_year_income[]"
      id="current_year_income-0"
      aria-="true"
      value="true"
      type="checkbox"
    />
    <label htmlFor="current_year_income-0">
      I expect to earn an income of at least $200k ($300k with spouse) again
      this year.{" "}
    </label>

    <button
      class="bg-black p-3 text-white mt-4"
      :disabled="sending"
      type="submit"
    >
      {{ btnTxt }}
    </button>
  </form>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      legalNameOfPerson: "",
      btnTxt: "Submit",
      sending: false,
    };
  },
  methods: {
    async submitForm() {
      this.sending = true;
      this.btnTxt = "Sending...";
      console.log("Ran Submit!");
      try {
        const res = await axios.post(
          "https://salontest-terrifickid.cloud.okteto.net/onboard",
          {
            walletAddress: this.userAddress,
            legalNameOfPerson: this.legalNameOfPerson,
          }
        );
        console.log("success", res.data);
        this.btnTxt = "Application Sent!";
      } catch (error) {
        console.log("error", error);
        this.btnTxt = "error!";
      }
    },
  },
  computed: {
    userAddress() {
      return this.$store.state.userAddress;
    },
  },
};
</script>
<style scoped>
label {
  margin: 1.5rem 0 0.25rem 0;
  display: block;
  font-weight: 1000;
}
input[type="text"] {
  border: 1px solid #eee;
  padding: 1rem;
  display: block;
  width: 100%;
}
</style>
