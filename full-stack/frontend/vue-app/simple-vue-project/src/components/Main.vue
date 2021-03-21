<template>
  <main class="main-container">
    <teleport to="#modal" :show="showModal">
      <Modal :show="showModal" @close="closeModal" title="Sample Test">
        <div>
          <p>International Secrets to be traded</p>
        </div>
      </Modal>
    </teleport>
    <button @click="openModal" style="margin: var(--small) 0">
      Show Modal
    </button>
    <button @click.alt="openModal" style="margin: var(--small) 0">
      Show Modal [Alt + Click]
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
    closeModal({ type }) {
      console.log(type);
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
