<template>
    <div class="view-container">
        <div class="title">
            <h1 class="title-head">University of Manitoba <br> Women in Computer Science <br>(UMWICS)</h1>
            <p class="description">
                University of Manitoba Women in Computer Science, also known as UMWICS, is a student group that promotes
                and supports women and gender minority
                involvement in the field of Computer Science. UMWICS hosts events to provide a welcoming and safe
                space for women and gender minority students, and provide tools to prepare them for their success. UMWICS
                also aims to promote and create awareness of the importance of women in the Computer Science field
                within the community.

            </p>
        </div>

        <div>
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
.description {
    padding-top: 20px;
}
</style>