<template>
  <div>
    <FormLabel :count="count" :required="required">{{ title }}</FormLabel>
    <FormHelp :help="help" v-if="help" />
    <textarea
      class="font-haffer text-xl sm:ml-0 bg-transparent block border-b border-black w-full text-black py-3 outline-none placeholder-opb"
      placeholder="..."
      required
      rows="3"
      v-model="value"
      @input="$emit('update', value)"
      autocomplete="off"
    />
    <FormButtonOk @ready="$emit('ready')" />
  </div>
</template>
<script>
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
    };
  },
};
</script>
