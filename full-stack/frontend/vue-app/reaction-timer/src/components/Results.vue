<template>
  <div>
    <p>Reaction Time - {{ score }} ms</p>
    <p class="rank">Rank: {{ rank }} </p>
  </div>
</template>

<script>
export default {
  name: "Results",
  data() {
    return {
      rank: ''
    };
  },
  props: {
    score: {
      type: Number
    }
  },
  mounted() {
    if (this.score < 250) {
      this.rank = 'Ninja Fingers'
    } else if (this.score < 400) {
      this.rank = 'Rapid Reflexes'
    } else {
      this.rank = 'Snail Pace...'
    }
  }
};
</script>

<style scoped>
.rank {
  background-color: var(--black);
  color: var(--white);
  width: 50;
  height: 50;
}
</style>
