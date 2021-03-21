<template>
  <nav class="header-container">
    <div>
      <h4>
        {{ title }}
      </h4>
    </div>
    <div></div>
  </nav>
</template>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border);
  padding-left: var(--small);
  padding-right: var(--small);
}
</style>

<script>
export default {
  name: "Header",
  data() {},
  props: {
    title: String,
  },
};
</script>