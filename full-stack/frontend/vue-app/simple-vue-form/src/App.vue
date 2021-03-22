<template>
  <div>
    <Header title="Vue Form" />
    <Main>
      <SignupForm />
    </Main>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Button from "./components/Button";
import SignupForm from "./components/SignupForm";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Main,
    Button,
    SignupForm,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.spacing {
  padding-top: var(--extraSmall);
  padding-bottom: var(--extraSmall);
}
</style>