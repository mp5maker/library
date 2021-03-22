<template>
  <div>
    <Header title="Reaction Timer" />
    <Main>
      <Button :click="start" :disabled="isPlaying"> Play </Button>
      <div class="spacing">
        <Block :delay="delay" v-if="isPlaying" @end="endGame"></Block>
      </div>
      <div class="spacing">
        <Results v-if="showResults" :score="score" />
      </div>
    </Main>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Button from "./components/Button";
import Block from "./components/Block";
import Results from "./components/Results";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Main,
    Button,
    Block,
    Results,
  },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false,
    };
  },
  methods: {
    start() {
      this.showResults = false;
      this.delay = 2000 + Math.random() * 500;
      this.isPlaying = true;
    },
    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResults = true;
    },
  },
};
</script>

<style scoped>
.spacing {
  padding-top: var(--extraSmall);
  padding-bottom: var(--extraSmall);
}
</style>