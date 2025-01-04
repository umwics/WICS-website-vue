<template>
    <div class="card-container">
        <div class="top"></div>
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
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');

* {
    box-sizing: border-box;
}

.card-container {
    width: 524px;
    border-radius: 12px;
}

.top {
    background-color: #C6DBED;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    height: 34px;
    border-bottom: 2px solid #2C456F;
}

.main {
    color: #2C456F;
    font-family: 'Josefin Sans';
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
</style>