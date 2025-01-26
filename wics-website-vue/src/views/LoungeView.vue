<template>
    <div class="view-container">
        <div class="title">
            <h1>UMWICS Lounge</h1>
            <p>Located at EITC-E2 ROOM 559!</p>
        </div>

        <div class="lounge">
            <CardComponent title="WOMEN IN COMPUTER SCIENCE LOUNGE"
                description="The Women in Computer Science Lounge is a space dedicated to women and gender minorities within computer science. Its purpose is to be a space specifically for underrepresented groups in CS to meet, support one another, and form community. Despite its name, the lounge is not limited just to women. Any person who self-identifies as a gender minority (e.g. non-binary, genderqueer, two-spirit, transgender, etc.) is welcome!"
                secondaryTitle="FEEDBACK FORM"
                secondaryBody="We value your feedback! Please fill out the form <a href='https://forms.gle/iW7m1scLTCJtYtYVA' target='_blank' rel='noopener noreferrer'>here</a> to let us know your thoughts." />
            <CardComponent title="Guidelines" description="
        <ol style='margin-left: 10px;'>
            <li>Respect others in the lounge; this is included but not limited to their names, pronouns, identities, and boundaries.</li>
            <li>Do not make assumptions about peoples’ identities or backgrounds.</li>
            <li>Be aware of how your actions affect others (e.g., volume, topics of conversation, etc.); remember, this is a public space.</li>
            <li>The WICS team is in charge of moderating the lounge. If there are any serious conflicts or concerns, please bring them to the executive(s) in the lounge, or contact us outside of the lounge (in person, through Discord/Instagram, or through the feedback form in our LinkTree).</li>
            <li>The purpose of this room is to be a welcoming and safe space! When in the lounge, please do your best to embody these principles, and avoid excluding or singling out anyone for any particular reason.</li>
        </ol>
    " />
        </div>
        <div class="lounge">
            <CardComponent title="DIRECTIONS TO THE LOUNGE" description='<iframe src="https://www.instagram.com/reel/DAqujeIgDY_/embed" 
                width="400" height="600" frameborder="0" data-instgrm-captioned=""
                allowfullscreen scrolling="no" title="Directions to UMWICS Lounge"></iframe>' />
            <div class="gallery">
                <img v-for="(picture, index) in loungePictures" :key="index" :src="picture.image" :alt="picture.alt" />
            </div>
        </div>
    </div>
</template>

<script setup>
import CardComponent from '@/components/CardComponent.vue';
import { loungePictures } from '@/assets/data/lounge/lounge.js';
</script>

<style scoped>
.lounge {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 5%;
    row-gap: 5%;
    margin-bottom: 20px;
}

.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
}

.gallery img {
    width: 100%;
    height: auto;
    border-radius: 8px;

    border: 2px solid black;
}

@media (max-width: 800px) {
    .title {
        padding-bottom: 10%;
    }

    .lounge {
        grid-template-columns: 1fr;
        row-gap: 5%;
        padding-bottom: 36%;
    }
}

@media (min-width: 801px) {
    .title {
        padding-bottom: 5%;
    }

    .lounge {
        grid-template-columns: 1fr 1fr;
        column-gap: 5%;
        row-gap: 5%;
        padding-bottom: 5%;
    }

    .directions {
        width: 500px;
        height: 700px;
    }
}
</style>
