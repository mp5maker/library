<template>
  <footer class="footer-container">
    <div>
      {{ new Date().getFullYear() }} All Rights Reserved. {{ companyName }}
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  min-height: var(--extraLarge);
  border-top: 1px solid var(--whitesmoke);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
export default {
  name: "Footer",
  props: {
    companyName: String,
  },
};
</script>
