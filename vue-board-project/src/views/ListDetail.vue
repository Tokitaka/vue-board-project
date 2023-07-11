<template>
        <label>Title :</label>
        <input type="text" v-model="title" readonly>
        <label>Content :</label>
        <textarea v-model="content" readonly></textarea>
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

            this.$emit('setPageTitle', `게시글 ${this.idx}`);
    },
}
</script>

<style></style>