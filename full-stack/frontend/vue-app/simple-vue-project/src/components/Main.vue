<template>
  <main class="main-container">
    <Modal :show="showModal" :closeModal="closeModal" title="Sample Test" />
    <button @click="openModal" style="margin: var(--small) 0">
      Show Modal
    </button>
    <div>
      <input type="text" ref="name" />
      <button @click="handleClick">Click Me</button>
    </div>
  </main>
</template>

<script>
import Modal from "./Modal";

export default {
  name: "Main",
  data() {
    return {
      showModal: false,
    };
  },
  components: {
    Modal,
  },
  methods: {
    handleClick() {
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
    closeModal() {
      this.showModal = false;
    },
    openModal() {
      this.showModal = true;
    },
  },
};
</script>

<style scoped>
.main-container {
  text-align: left;
  padding: var(--small);
  min-height: calc(100vh - 60px);
}
</style>
