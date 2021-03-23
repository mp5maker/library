<template>
  <div>
    <PostList :posts="posts" v-if="showPosts && posts.length" />
    <div v-else>Loading...</div>
    <button @click="showPosts = !showPosts">Toggle Posts</button>
  </div>
</template>

<script>
import { ref } from "vue";
import PostList from "../components/PostList";
import getPosts from "../composables/getPosts";

export default {
  name: "Home",
  components: {
    PostList,
  },
  setup() {
    const showPosts = ref(true);
    const { posts, load } = getPosts();
    load();
    return { posts, showPosts };
  },
};
</script>

<style>
</style>