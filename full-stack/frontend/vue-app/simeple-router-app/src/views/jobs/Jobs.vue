<template>
  <div>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
import get from "lodash/get";

export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((response) => response.json())
      .then((data) => (this.jobs = data))
      .catch((error) => console.log(get(error, "message", "")));
  },
};
</script>
