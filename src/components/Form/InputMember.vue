<template>
  <div>
    <FormLabel :count="count" :required="required">{{ title }}</FormLabel>
    <FormHelp :help="help" v-if="help" />
    <select
      v-model="value"
      @change="$emit('update', value)"
      class="font-haffer text-xl sm:ml-0 bg-transparent block border-b border-black w-full text-black py-3 outline-none placeholder-opb"
    >
      <option v-for="(m, index) in members" :key="index" :value="m.fields">
        {{ m.fields.firstName }} {{ m.fields.lastName }}
      </option>
    </select>

    <FormButtonOk @ready="$emit('ready')" />
  </div>
</template>
<script>
import axios from "axios";
import FormLabel from "@/components/Form/FormLabel.vue";
import FormHelp from "@/components/Form/FormHelp.vue";
import FormButtonOk from "@/components/Form/FormButtonOk.vue";
export default {
  components: {
    FormLabel,
    FormButtonOk,
    FormHelp,
  },
  props: ["count", "title", "required", "placeholder", "help"],
  emits: ["ready"],
  data() {
    return {
      value: "",
      members: [],
    };
  },
  async beforeMount() {
    try {
      const res = await axios.get(
        process.env.VUE_APP_URI + "/members?cache=true"
      );
      this.members = res.data;
      console.log(this.members);
    } catch (error) {
      console.log("error", error);
    }
  },
};
</script>
