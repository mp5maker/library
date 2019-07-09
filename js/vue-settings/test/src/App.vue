<template>
  <div id="app">
    <Navbar />
    <Layout />
    <Footer />
    <link
      rel='stylesheet'
      href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css'/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Layout from "./components/Layout.vue";
import Footer from "./components/Footer.vue";

export default {
  name: 'app',
  components: {
    Navbar,
    Layout,
    Footer
  }
}

</script>

<style scoped>
body, html {
  margin: 0;
  padding: 0;
}

body {
  height: 100%;
}

.container-fluid {
  height: calc(100vh - 60px);
}

footer {
  border-top: 1px solid lightgrey;
  height: 60px;
  line-height: 60px;
  text-align: center;
}
</style>
