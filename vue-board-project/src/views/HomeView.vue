<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="boardList in boardLists" :key="boardList.idx">
        <SingleProject :boardList="boardList" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from '../components/SingleProject.vue'
export default {
  name: 'Home',
  components: {SingleProject},
  data() {
    return {
      loading: true,
      boardLists: []
    };
  },
  mounted() {
    fetch('https://dev.safeean.com:63101/test/post/list?startRow=1')
      .then(res => res.json())
      .then(data => {
        this.boardLists = data.data;
        this.loading = false;
      })
      .catch(err => {
        console.log(err.message);
        this.loading = false;
      });
  }
};
</script>