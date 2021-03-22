<template>
  <button @click="click">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    click: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>