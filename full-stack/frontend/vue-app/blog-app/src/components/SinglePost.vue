<template>
  <div class="post">
    <router-link :to="{ name: 'Details', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
      <p>{{ snippet }}</p>
      <span v-for="tag in post.tags" :key="tag"> #{{ tag }} </span>
    </router-link>
  </div>
</template>

<script>
import { computed, onMounted, onUnmounted, onUpdated } from "vue";

export default {
  name: "SinglePost",
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + "...";
    });

    onMounted(() => console.log("component mounted"));
    onUnmounted(() => console.log("component unmounted"));
    onUpdated(() => console.log("component updated"));

    return { snippet };
  },
};
</script>

<style>
</style>