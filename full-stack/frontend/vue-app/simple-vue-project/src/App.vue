<template>
  <div>
    <Navbar title="Simple Vue" />
    <Main />
    <Footer companyName="Photon Enterprise" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    Main,
  },
};
</script>
