<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <router-link to="/add">
        <button>게시물 쓰기</button>
      </router-link>
      <div class="paging">
      <span @click="prevPage" class="material-symbols-outlined">arrow_back_ios</span>
      <span class="current-page">{{ currentPage }}</span>
      <span @click="nextPage" class="material-symbols-outlined">arrow_forward_ios</span>
    </div>
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
      boardLists: [],
      currentPage: 1,
      perPage: 10,
      totalPages: 0,
    };
  },
  mounted() {
   this.$emit('setPageTitle','게시판 홈')
   this.fetchList();
  },
  methods: {
    fetchList() {
      fetch(`https://dev.safeean.com:63101/test/post/list?startRow=${this.currentPage}`)
      .then(res => res.json())
      .then(data => {
        this.boardLists = data.data;
        this.totalPages = Math.ceil(data.total / this.perPage);
        this.loading = false;
        console.log(data);
      })
      .catch(err => {
        console.log(err.message);
        this.loading = false;
      });
    }, 
    prevPage(){
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchList();
      }
    },
    nextPage(){
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchList();
      }
    },
    handleDelete(idx) {
      const confirmed = confirm("삭제하시겠습니까?")
      if (confirmed) {
        this.boardLists = this.boardLists.filter((boardList) => {
          return boardList.idx != idx
      })
      }
    }
  }
};
</script>

<style>
button {
    margin: 20px auto 0 auto;
    background-color: #00ce89;
    color: white;
    border: 0;
    padding: 7px;
    border-radius: 6px;
    font-size: 13px;
    cursor: pointer;
}
.current-page {
  font-weight: bold;
}
.paging {
  display: flex;
  align-items: center; 
  margin: 20px auto 0 auto;
}
</style>