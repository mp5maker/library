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
export default {
  data() {
    return {
      jobs: [
        { title: "UX Designer", id: 1, detail: "lorem" },
        { title: "Web Developer", id: 2, detail: "lorem" },
        { title: "View Developer", id: 3, detail: "lorem" },
      ],
    };
  },
};
</script>
