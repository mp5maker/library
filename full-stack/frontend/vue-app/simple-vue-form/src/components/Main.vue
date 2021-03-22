<template>
  <main class="main-container">
    <slot></slot>
  </main>
</template>


<script>
export default {
  name: "Main",
};
</script>

<style scoped>
.main-container {
  padding: var(--small);
}
</style>
