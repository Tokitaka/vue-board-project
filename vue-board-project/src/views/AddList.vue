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
        <button>게시글 작성</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            content: '',
            images: []
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
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(boardList)
            }).then(() => {
                alert('작성 완료!')
                this.$router.push('/')
            }).catch((err) => console.log(err))
        },
        previewImage(e) {
            let file = e.target.files[0]
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = (e) => {
                this.images.push(reader.result)
            }
        }
    },
    mounted() {
        this.$emit('setPageTitle', '게시글 쓰기')
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
.image-preview {
    width: 100px;
    height: 100px;
    margin: 10px 10px;
}
</style>