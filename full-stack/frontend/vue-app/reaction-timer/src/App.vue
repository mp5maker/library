<template>
  <div>
    <Header title="Reaction Timer" />
    <Main>
      <Button :click="start" :disabled="isPlaying"> Play </Button>
      <div class="spacing">
        <Block :delay="delay" v-if="isPlaying"></Block>
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

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Main,
    Button,
    Block,
  },
  data() {
    return {
      isPlaying: false,
      delay: null,
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 500;
      this.isPlaying = true;
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