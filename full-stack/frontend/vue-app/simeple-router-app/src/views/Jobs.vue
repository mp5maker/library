<template>
  <div>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id">
      {{ job.title }}
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
