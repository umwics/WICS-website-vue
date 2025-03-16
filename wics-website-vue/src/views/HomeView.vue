<template>
    <div class="view-container">
        <div class="title">
            <h1 class="title-head">University of Manitoba <br> Women in Computer Science <br>(UMWICS)</h1>
            <p>
                University of Manitoba Women in Computer Science, also known as UMWICS, is a student group that promotes
                and supports women and non-binary
                involvement in the field of Computer Science. UMWICS hosts events to provide a welcoming and safe
                space for women and non-binary students, and provide tools to prepare them for their success. UMWICS
                also aims to promote and create awareness of the importance of women in the Computer Science field
                within the community.

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