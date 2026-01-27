<template>
  <div class="collage-container" :class="collageFormationStyle">
    <img v-for="item in images" :key="item?.position" :src="item.imageSrc" :alt="item.alt" />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const name = 'CollageComponent'

defineOptions({
  name: name
})

const props = defineProps({
  images: { type: Object }
})

/**
 * creates a BEM class name depending on how many images there are,
 * so the design of collage varies depending on the amount of images.
 */
const collageFormationStyle = computed(
  () => 'collage-container--formation-for-' + props.images?.length
)
</script>

<style scoped>
.collage-container {
  width: 100%;
  margin-inline: auto;
  display: grid;
  gap: 0.5rem;
}

@media (max-width: 800px) {
  .collage-container--formation-for-5 {
    grid-template-areas:
      'five five three three'
      'five five three three'
      'one one one one'
      'two two four four'
      'two two four four';
  }
}

@media (min-width: 801px) {
  .collage-container--formation-for-5 {
    grid-template-areas:
      'one one one one one one one one'
      'five five three three two two four four'
      'five five three three two two four four';
  }
}

.collage-container--formation-for-4 {
  grid-template-areas:
    'one   one   five five five two  two'
    'three three five five five four four';
}

.collage-container--formation-for-3 {
  grid-template-areas:
    'one   one   two   two   three   three'
    'one   one   two   two   three   three';
}

.collage-container--formation-for-2 {
  grid-template-areas:
    'one   one   two  two'
    'one   one   two  two';
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
