<template>
  <div>
    <Header title="Reaction Timer" />
    <Main>
      <div>hello</div>
    </Main>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Main,
  },
};
</script>