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
        alt: "The UMWICS 2023 Mentor Mingle group photo. Has several students and professionals standing together smiling. The colouring has an orange hue."
    },
    {
        position: "two",
        imageSrc: lougeImage,
        alt: "Four members of UMWICS in the UMWICS lounge. One member is sitting a black chair, with a laptop in her lap. She is showing something on her laptop to the other three members, whom are all standing. All members are looking at the laptop and smiling."
    },
    {
        position: "three",
        imageSrc: communityMeetupImage,
        alt: "Photo taken from the UMWICS 2024 Fall Community Meet Up event. Five members of UMWICS are sitting on black chairs in a light blue room, facing towards the center of the photo. One member is standing, facing away."
    },
    {
        position: "four",
        imageSrc: mentorNetworkingImage,
        alt: "Photo taken from the UMWICS 2024 Mentor Mingle event. Several UMWICS members are sitting in office style chairs, looking towards two computer science professionals, who are talking. They are in an office cubical in a grey office room."
    },
    {
        position: "five",
        imageSrc: mentorMingleImage24,
        alt: "The UMWICS 2024 Mentor Mingle group photo. Has several students and professionals standing together smiling."
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