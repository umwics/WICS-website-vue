<template>
    <div class="view-container">
        <div class="title">
            <h1 class="title-head">Women in Computer Science <br>(WICS)</h1>
            <p>
                WICS is a student group supporting women and gender minorities in computer science. Our aim is to make
                computer
                science less intimidating and create a safe space for women to connect.
            </p>
        </div>
        <img :src="mentorMingleImage" alt="Mentor Mingle ">
    </div>
</template>

<script setup>
import mentorMingleImage from '@/assets/data/home/images/mentor-mingle-2023.jpeg'
</script>

<style scoped>
img {
    width: 70%;
    max-width: 80%;
    min-width: 70%;
    padding: 1rem;
}
</style>