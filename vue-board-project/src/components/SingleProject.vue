<template>
    <div class="boardList">
        <div class="actions">
            <router-link :to="{ name: 'listDetail', params: {idx: boardList.idx}}" class="custom-link">
                <h3>{{ boardList.title }}</h3>
            </router-link>
            <div class="icons">
                <router-link :to="{ name: 'updateList', params: {idx: boardList.idx} }">
                    <span class="material-symbols-outlined">edit</span>
                </router-link>
                <span @click="deleteList" class="material-symbols-outlined">delete</span>
            </div>
        </div>
        <div class="createdAt">
            <p>{{ boardList.createAt }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SingleProject',
    props: ['boardList'],
    data() {
        return {
            uri: 'https://dev.safeean.com:63101/test/post'
        }
    },
    methods: {
        deleteList() {
            const confirmed = confirm("삭제하시겠습니까?")
            const requestOptions = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ idx: this.boardList.idx }),
            }
            if (confirmed) {
                fetch(this.uri, requestOptions)
            .then(res => {
                if (!res.ok) {
                    throw new Error('게시물이 삭제되지 않았습니다. 재시도해주세요')
                }
            })
            .then(() => this.$emit('delete', this.boardList.idx))
            .catch((err) => console.log(err.message))
            }
        }
    }
}
</script>

<style>
.boardList {
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 8px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
}
.custom-link {
    text-decoration: none;
}
h3 {
    cursor: pointer;
    color: black;
}

.actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.material-symbols-outlined {
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
}

.material-symbols-outlined:hover {
    color: #777;
}
</style>