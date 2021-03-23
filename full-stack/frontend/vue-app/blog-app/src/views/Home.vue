<template>
  <div class="home">
    Home
    <p ref="paragraphRef">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click Me</button>
    <button @click="age++">Add 1 to age</button>
    <input type="text" v-model="name" />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Home",
  setup() {
    const paragraphRef = ref(null);

    // These are not reactive values
    console.log("setup");
    let name = ref("mario");
    let age = ref(30);

    const handleClick = () => {
      name.value = "john";
      age.value = 27;
      console.log(paragraphRef, paragraphRef.value);
    };

    return { name, age, handleClick, paragraphRef };
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
};
</script>
