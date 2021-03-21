<template>
  <footer class="footer-container">
    <div>{{ new Date().getFullYear() }} &copy; All Rights Reserved</div>
  </footer>
</template>

<style scoped>
.footer-container {
  text-align: center;
  border-top: 1px solid var(--border);
  line-height: 60px;
  height: 60px;
}
</style>

<script>
export default {
  name: "Footer",
  data() {},
};
</script>