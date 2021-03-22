<template>
  <div class="block-container" v-if="showBlock" @click="stopTimer">
    <p>
      {{ delay }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Block",
  props: {
    delay: {
      type: Number,
    },
  },
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  updated() {
    console.log("block updated");
  },
  unmounted() {
    console.log("block unmounted");
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.$emit('end', this.reactionTime)
    },
  },
};
</script>

<style scoped>
.block-container {
  width: 200px;
  height: 50px;
  background-color: var(--firebrick);
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--extraSmall);
}
</style>
