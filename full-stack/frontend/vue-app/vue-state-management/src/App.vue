<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div
      v-for="product in products"
      :key="product.name + String(product.price)"
    >
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }}</p>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: "App",
  computed: {
    products() {
      return this.$store.products;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
