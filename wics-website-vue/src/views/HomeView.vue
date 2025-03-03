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
import mentorMingleImage23 from '@/assets/data/home/images/mentor-mingle-2023.jpeg'
import lougeImage from '@/assets/data/home/images/UMWICS-louge-photo.png'
import mentorMingleImage24 from '@/assets/data/home/images/mentor-mingle-24.webp'
import mentorNetworkingImage from '@/assets/data/home/images/mentor-networking-24.png'
import communityMeetupImage from '@/assets/data/home/images/fall-community-meetup-24.png'
import CollageComponent from '@/components/CollageComponent.vue';

const images = [
    {
        position: "one",
        imageSrc: mentorMingleImage23,
        alt: "something"
    },
    {
        position: "two",
        imageSrc: lougeImage,
        alt: "something"
    },
    {
        position: "three",
        imageSrc: communityMeetupImage,
        alt: "something"
    },
    {
        position: "four",
        imageSrc: mentorNetworkingImage,
        alt: "something"
    },
    {
        position: "five",
        imageSrc: mentorMingleImage24,
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