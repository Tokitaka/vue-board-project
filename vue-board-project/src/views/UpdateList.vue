<template>
    <form @submit.prevent="handleSubmit">
        <label>Title :</label>
        <input type="text" v-model="title" required>
        <label>Content :</label>
        <textarea v-model="content" required></textarea>
        <button>게시글 수정</button>
    </form>
</template>

<script>
export default {
    props: ['idx'],
    data() {
        return {
            title: '',
            content: '',
            uri: 'https://dev.safeean.com:63101/test/post/'
        }
    },
    mounted() {
        fetch(this.uri + this.idx)
            .then(res => res.json())
            .then(data => {
                this.title = data.data.title
                this.content = data.data.content
            })
            .catch(error => {
                console.log(error);
            });

            this.$emit('setPageTitle', '게시판 수정');
    },
    methods: {
        handleSubmit() {
            fetch(this.uri, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    idx: this.idx,
                    title: this.title,
                    content: this.content
                })
            }).then(() => {
                this.$router.push('/')
            }).catch(err => console.log(err))
    }
}
}
</script>

<style></style>