<template>
  <div>
    <h1>Job Details Page</h1>
    <p>The Job id is {{ $route.params.id }}</p>
    <div v-if="job">
      <p>The Job id is {{ id }}</p>
      <p>The Job Title {{ job.title }}</p>
      <p>The Job Detail is {{ job.detail }}</p>
    </div>
    <div v-else>Loading ...</div>
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
  props: ["id"],
};
</script>

<style scoped>
</style>