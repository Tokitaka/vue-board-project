<template>
  <div class="project">
    <div class="actions">
        <h3>{{ project.title }}</h3>
    </div>
    <div class="createdAt">
        <p>{{ project.createAt }}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: ['project']
}
</script>

<style>
.project {
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 8px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.5);
}
h3 {
    cursor: pointer;
}
</style>