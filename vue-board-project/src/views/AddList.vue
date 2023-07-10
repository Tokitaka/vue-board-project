<template>
  <form @submit.prevent="handleSubmit">
    <label>Title :</label>
    <input type="text" v-model="title" required>
    <label>Content :</label>
    <textarea v-model="content" required></textarea>
    <button>게시글 작성</button>
  </form>
</template>

<script>
export default {
    data() {
        return {
            title:'',
            content:'',
        }
    },
    methods: {
        handleSubmit() {
            let boardList = {
                title: this.title,
                content: this.content
            }
            fetch('https://dev.safeean.com:63101/test/post', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(boardList)
            }).then(()=> {
                this.$router.push('/')
            }).catch((err) => console.log(err))
        }
    },
    mounted() {
        this.$emit('setPageTitle', '게시글 쓰기');
    }
}
</script>

<style>
form {
    background: white;
    padding: 20px;
    border-radius: 10px;
}
label {
    display: block;
    color: #bbb;
    text-transform: uppercase;
    font-size: 13px;
    margin: 15px 0 12px 0;
}
input {
    padding: 10px;
    border: 1px solid #ddd;
    width: 100%;
    box-sizing: border-box;
}
textarea {
    border: 1px solid #ddd;
    padding: 10px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}
form button {
    display: block;
    margin: 20px auto 0;
    background-color: #00ce89;
    color: white;
    border: 0;
    /* margin-top: 10px; */
    padding: 7px;
    border-radius: 6px;
    font-size: 13px;
    cursor: pointer;
}

</style>