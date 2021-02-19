<template>
  <div class="navbar-container">
    <div>
      <h3>{{ title }}</h3>
    </div>
  </div>
</template>

<style scoped>
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 15px 0 var(--boxShadow);
  padding: 0 var(--small);
  min-height: var(--extraLarge);
}
</style>

<script>
export default {
  name: "Navbar",
  props: {
    title: String,
  },
};
</script>
