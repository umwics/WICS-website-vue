<template>
    <div class="collage-container">
        <img v-for="item in content.images" :key="item?.position" :src="item.imageSrc" :alt="item.alt" />
    </div>
</template>

<script>
export default {
    name: 'CollageComponent',
    props: {
        content: Object
    }
}
</script>

<style scoped>
.collage-container {
    max-width: 800px;
    margin-inline: auto;
    display: grid;
    gap: 0.5rem;
    grid-template-areas: 
    "one   one   five five five two  two"
    "three three five five five four four";
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
