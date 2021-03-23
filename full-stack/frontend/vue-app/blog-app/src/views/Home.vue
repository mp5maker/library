<template>
  <div class="home">
    Home
    <div>
      <h2>Refs</h2>
      <p ref="paragraphRef">
        My name is {{ ninja.name }} and my age is {{ ninja.age }}
      </p>
      <button @click="updateNinja">Click Me</button>
      <button @click="ninja.age++">Add 1 to age</button>
      <input type="text" v-model="ninja.name" />
    </div>
    <div>
      <h2>Reactive</h2>
      <p>My name is {{ ninjaTwo.name }} and my age is {{ ninjaTwo.age }}</p>
      <button @click="updateNinjaTwo">Click Me</button>
    </div>
    <div>
      <input type="text" v-model="search" placeholder="search" />
      <div v-for="name in matchingNames" :key="name">
        {{ name }}
      </div>
    </div>
    <div>
      <button @click="handleStopWatch">Stop Watch</button>
      <button @click="handleStopWatchEffect">Stop Watch Effect</button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";

export default {
  name: "Home",
  setup() {
    console.log("setup");
    const paragraphRef = ref(null);
    const ninja = ref({ name: "mario", age: 30 });
    // Reactive do not accepts primitive type
    const ninjaTwo = reactive({ name: "luigi", age: 35 });
    const names = ref([
      "mario",
      "yoshi",
      "luigi",
      "toad",
      "bowser",
      "koopa",
      "peach",
    ]);
    const search = ref("");

    const matchingNames = computed(() => {
      return names.value.filter(
        (name) => name.toLowerCase().indexOf(search.value.toLowerCase()) > -1
      );
    });

    const stopWatch = watch(search, () => {
      console.log("Watch");
      console.log(search.value);
    });

    const stopWatchEffect = watchEffect(() => {
      // Automatically watches
      console.log("Watch Effect");
      console.log(search.value);
    });

    const handleStopWatch = () => stopWatch();
    const handleStopWatchEffect = () => stopWatchEffect();

    const updateNinja = () => {
      ninja.value.name = "john";
      ninja.value.age = 27;
      console.log(paragraphRef, paragraphRef.value);
    };

    const updateNinjaTwo = () => {
      ninjaTwo.name = "mario";
      ninjaTwo.age = 33;
    };

    return {
      ninja,
      updateNinja,
      paragraphRef,
      ninjaTwo,
      updateNinjaTwo,
      names,
      search,
      matchingNames,
      handleStopWatch,
      handleStopWatchEffect,
    };
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
};
</script>
