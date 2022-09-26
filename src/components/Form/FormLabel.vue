<template>
  <label class="block mb-10 flex items-center font-haffer text-2xl"
    ><span class="mr-12">{{ count }}</span> <slot></slot
  ></label>
</template>
<script>
export default {
  props: ["count", "required"],
};
</script>
