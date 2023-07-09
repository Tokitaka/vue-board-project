<template>
    <div class="boardList">
        <div class="actions">
            <h3>{{ boardList.title }}</h3>
            <div class="icons">
                <span class="material-symbols-outlined">edit</span>
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
            const requestOptions = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ idx: this.boardList.idx }),
            }

            fetch('this.uri', requestOptions)
            .then(res => {
                if (!res.ok) {
                    throw new Error('게시물이 삭제되지 않았습니다. 재시도해주세요')
                }
            })
            .catch((err) => console.log(err.message));
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

h3 {
    cursor: pointer;
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