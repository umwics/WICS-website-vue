<template>
    <div class="card-container">
        <div class="card-top"></div>
        <div class="main">
            <img class="card-img" :src="image" />
            <h1 class="title">{{ title }}</h1>
            <p class="body">{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: {
        image: String,
        title: String,
        description: String,
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}

.main {
    color: var(--color-text-dark);
    text-align: left;
    padding: 27px 30px;
    margin: 0;
}

.card-img {
    width: 100%;  
    height: 200px; 
    object-fit: cover;
    display: block;
    padding: 0;
    margin: 0;
    margin-bottom: 30px;
}

.title {
    font-weight: bold;
    font-size: 24px;
    padding: 0;
    margin: 0;
    margin-bottom: 20px;
}

.body {
    font-size: 16px;
    padding: 0;
    margin: 0;
}
</style>