<template>
  <div>
    <h1>Job Details Page</h1>
    <p>The Job id is {{ $route.params.id }}</p>
    <p>The Job id is {{ id }}</p>
  </div>
</template>

<script>
export default {
  name: "JobDetails",
  data() {
    return {
      alternateID: this.$route.params.id,
      job: {},
    };
  },
  mounted() {
    fetch(`http://localhost:3000/jobs/${this.id}`)
      .then((response) => response.json())
      .then((data) => (this.job = data))
      .catch((error) => console.log(get(error, "message", "")));
  },
  props: {
    id: {
      type: Number,
    },
  },
};
</script>

<style scoped>
</style>