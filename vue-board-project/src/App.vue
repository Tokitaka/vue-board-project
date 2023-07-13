<template>
  <Header :pageTitle="pageTitle"/>
  <router-view @setPageTitle="updatePageTitle"/>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {Header},
  data() {
    return {
      pageTitle: '게시판'
    }
  },
  methods: {
    updatePageTitle(pageTitle) {
      this.pageTitle = pageTitle
    }
  }
}
</script>

<style>
body {
  background: #f2f2f2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #555;
}

</style>
