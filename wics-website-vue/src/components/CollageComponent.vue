<template>
    <div class="collage-container" :class="collageFormationStyle">
        <img v-for="item in images" :key="item?.position" :src="item.imageSrc" :alt="item.alt" />
    </div>
</template>

<script setup>
import { computed } from 'vue';

const name = "CollageComponent";

defineOptions({
    name: name,
});

const props = defineProps({
    images: { type: Object }
})

/** 
 * creates a BEM class name depending on how many images there are, 
 * so the design of collage varies depending on the amount of images. 
 */
const collageFormationStyle = computed(() => "collage-container--formation-for-" + props.images?.length);

</script>

<style scoped>
.collage-container {
    max-width: 800px;
    margin-inline: auto;
    display: grid;
    gap: 0.5rem;
}

.collage-container--formation-for-5 {
    grid-template-areas:
        "one   one   five five five two  two"
        "three three five five five four four";
}

.collage-container--formation-for-4 {
    grid-template-areas:
        "one   one   five five five two  two"
        "three three five five five four four";
}

.collage-container--formation-for-3 {
    grid-template-areas:
        "one   one   two   two   three   three"
        "one   one   two   two   three   three";
}

.collage-container--formation-for-2 {
    grid-template-areas:
        "one   one   two  two"
        "one   one   two  two";
}

.collage-container img {
    width: 100%;
    aspect-ratio: 1;
    display: block;
    object-fit: cover;
    align-self: center;
}

.collage-container :nth-child(1) {
    grid-area: one;
}

.collage-container :nth-child(2) {
    grid-area: two;
}

.collage-container :nth-child(3) {
    grid-area: three;
}

.collage-container :nth-child(4) {
    grid-area: four;
}

.collage-container :nth-child(5) {
    grid-area: five;
}
</style>
