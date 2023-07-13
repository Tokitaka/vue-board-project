<template>
    <form @submit.prevent="handleSubmit">
        <label>Title :</label>
        <input type="text" v-model="title" required>
        <label>Content :</label>
        <textarea v-model="content" maxlength="500" required></textarea>
        <!-- upload image -->
        <label for="upload-image">
            <span class="material-symbols-outlined">add_a_photo</span>
            이미지 추가하기
        </label>
        <input type="file" multiple @change="previewImage" id="upload-image" hidden>
        <div>
            <img class="image-preview" v-for="image in images" :key="image.id" :src="image" alt="미리보기">
        </div>
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
            uri: 'https://dev.safeean.com:63101/test/post/',
            images: []
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
                console.log(error)
            });

            this.$emit('setPageTitle', '게시글 수정')
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
                alert('수정 완료!')
                this.$router.push('/')
            }).catch(err => console.log(err))
    },
    previewImage(e) {
            let file = e.target.files[0]
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = (e) => {
                this.images.push(reader.result)
            }
        }
}
}
</script>

<style>
.image-preview {
    width: 100px;
    height: 100px;
    margin: 10px 10px;
}
</style>