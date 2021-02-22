<template>
  <div class="backdrop" :class="{ active: show }">
    <div class="modal">
      <div class="modal-header-container">
        <div>
          {{ title }}
        </div>
        <div @click="closeModal">X</div>
      </div>
      <div class="modal-content-container"></div>
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
  display: "flex";
  justify-content: "space-between";
  align-items: center;
}
</style>

<script>
export default {
  name: "Modal",
  props: {
    show: Boolean,
    closeModal: Function,
    title: String,
  },
};
</script>
