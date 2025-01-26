<template>
    <div class="card-container">
        <div class="card-top"></div>
        <div class="main">
            <img v-if="image" class="card-img" :src="image" />
            <h1 class="title">{{ title }}</h1>
            <p class="body" v-html="description"></p>

            <div class="section-divider"></div>

            <h1 v-if="secondaryTitle" class="title">{{ secondaryTitle }}</h1>
            <p v-if="secondaryBody" class="body" v-html="secondaryBody"></p>
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
        secondaryTitle: String,
        secondaryBody: String,
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
    height: 100%;
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

.section-divider {
    height: 10px;
    margin: 10px 0;
    background-color: transparent;
}
</style>