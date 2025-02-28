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
        
        <div class="collage-component">
            <CollageComponent :images="images"></CollageComponent>
        </div>
    </div>
</template>

<script setup>
import mentorMingleImage from '@/assets/data/home/images/mentor-mingle-2023.jpeg'
import CollageComponent from '@/components/CollageComponent.vue';

const images = [
    {
        position: "one",
        imageSrc: mentorMingleImage,
        alt: "something"
    },
    {
        position: "two",
        imageSrc: mentorMingleImage,
        alt: "something"
    },
    {
        position: "three",
        imageSrc: mentorMingleImage,
        alt: "something"
    },
    {
        position: "four",
        imageSrc: mentorMingleImage,
        alt: "something"
    },
    {
        position: "five",
        imageSrc: mentorMingleImage,
        alt: "something"
    }
    
]
</script>

<style scoped>

.collage-component {
    
    padding-top: 12px;
    margin-left: auto;
    margin-right: auto;
}
</style>