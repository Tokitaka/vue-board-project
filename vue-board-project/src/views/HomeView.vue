<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <router-link to="/add">
        <button>게시물 쓰기</button>
      </router-link>
      <div v-for="boardList in boardLists" :key="boardList.idx">
        <SingleProject :boardList="boardList" @delete="handleDelete"/>
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
      
  },
  created() {
    this.$emit('setPageTitle','게시판 홈')
  },
  methods: {
    handleDelete(idx) {
      this.boardLists = this.boardLists.filter((boardList) => {
          return boardList.idx != idx
      })
    }
  }
};
</script>

<style>
button {
    margin-top: 20px auto 0 auto;
    background-color: #00ce89;
    color: white;
    border: 0;
    padding: 7px;
    border-radius: 6px;
    font-size: 13px;
    cursor: pointer;
}
</style>