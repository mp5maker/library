<template>
  <div
    class="backdrop"
    :class="{ active: show }"
    @click.self="closeModal({ type: 'outside-modal', event: $event })"
  >
    <div class="modal">
      <div class="modal-header-container">
        <div class="modal-header-left-content">
          {{ title }}
        </div>
        <button @click="closeModal({ type: 'times', event: $event })">X</button>
      </div>
      <div class="modal-content-container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  display: none;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.backdrop.active {
  display: block;
}
.modal-header-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>

<script>
export default {
  name: "Modal",
  props: {
    show: Boolean,
    title: String,
  },
  methods: {
    closeModal({ type, event }) {
      this.$emit("close", { type, event });
    },
  },
};
</script>
