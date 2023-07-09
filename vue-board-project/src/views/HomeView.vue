<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="project in projects" :key="project.idx">
        <p>{{ project.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      projects: []
    };
  },
  mounted() {
    fetch('https://dev.safeean.com:63101/test/post/list?startRow=1')
      .then(res => res.json())
      .then(data => {
        this.projects = data.data;
        this.loading = false;
      })
      .catch(err => {
        console.log(err.message);
        this.loading = false;
      });
  }
};
</script>