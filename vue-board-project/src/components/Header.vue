<template>
    <header>
        <h2>{{ pageTitle }}</h2>
    </header>
</template>

<script>
export default {
    props: ['pageTitle'],
}
</script>

<style>
h2 {
    text-align: center;
    margin: 40px auto;
}
</style>