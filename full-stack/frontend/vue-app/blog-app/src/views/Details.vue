<template>
  <div>
    <div>Details</div>
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
    <span v-for="tag in post.tags" :key="tag"> #{{ tag }} </span>
  </div>
</template>

<script>
import getPost from "../composables/getPost";

export default {
  name: "Details",
  props: ["id"],
  setup(props) {
    const id = props?.id;
    const { post, load } = getPost({ id });
    load();
    return { post };
  },
};
</script>

<style>
</style>