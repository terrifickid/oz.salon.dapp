<template>
  <div>
    <FormLabel :count="count" :required="required">{{ title }}</FormLabel>
    <input
      type="text"
      class="text-xl ml-10 sm:ml-0 bg-transparent block border-b border-black w-full text-black py-3 outline-none placeholder-opb"
      placeholder="..."
      required
      v-model="value"
      @input="$emit('update', value)"
      @keyup.enter="$emit('ready')"
    />
    <FormButtonOk @ready="$emit('ready')" />
  </div>
</template>
<script>
import FormLabel from "@/components/Form/FormLabel.vue";
import FormButtonOk from "@/components/Form/FormButtonOk.vue";
export default {
  components: {
    FormLabel,
    FormButtonOk,
  },
  props: ["count", "title", "required", "placeholder"],
  data() {
    return {
      value: "",
    };
  },
};
</script>
