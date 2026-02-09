<template>
  <div class="card-container">
    <div class="card-top"></div>
    <div class="main">
      <div :class="imagePositionClasses">
        <div v-if="image" class="card-img">
          <img :src="image" :alt="imageAlt"/>
        </div>
        <div class="card-text">
          <h2 class="title">{{ title }}</h2>
          <p class="body">{{ description }}</p>
          <div v-if="title && description" class="section-divider"></div>
          <slot name="secondary-content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useValidator } from '@/composables/useValidator.js'

const name = 'CardComponent'

defineOptions({
  name: name
})

const props = defineProps({
  imagePosition: {
    type: String,
    default: 'top'
  },
  image: { type: String },
  title: {
    type: String
  },
  description: {
    type: String
  },
  imageAlt: {
    type: String,
    default: '',
    validator(value, props) {
      // require alt text if an image is defined, otherwise there should be no alt text
      return props.image !== ('' || undefined) ? value !== '' : value === ''
    }
  }
})

// validates imagePosition prop values as it has specific valid options
const validValues = ['top', 'side']
useValidator(props.imagePosition, name, validValues)

const imagePositionClasses = 'image-position--' + props.imagePosition
</script>

<style scoped>
* {
  box-sizing: border-box;
}

:slotted(h1) {
  font-size: 24px !important;
}

.main {
  color: var(--color-text-dark);
  text-align: left;
  padding: 27px 30px;
  margin: 0;
}

.image-position--top .card-img {
  margin-bottom: 30px;
}

.image-position--top .card-img img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
  padding: 0;
  margin: 0;
}

@media (max-width: 800px) {
  .image-position--side .card-img {
    margin-bottom: 30px;
  }

  .image-position--side .card-img img {
    width: 100%;
    height: 300px;

    object-fit: cover;
    display: block;
    padding: 0;
    margin: 0;
  }
}

/* the image only goes to the side for bigger screens */
@media (min-width: 801px) {
  .image-position--side {
    display: flex;
    flex-direction: row;
    column-gap: 4%;
    align-items: center;
  }

  .image-position--side .card-text {
    width: 100%;
  }

  .image-position--side .card-img {
    width: 60%;
    height: 100%;
  }

  .image-position--side .card-img img {
    width: 100%;
  }
}

.title {
  font-weight: bold;
  padding: 0;
  margin: 0;
  margin-bottom: 20px;
}

.body {
  font-size: 16px;
  padding: 0;
  margin: 0;
  white-space: pre-line;
}

.section-divider {
  height: 10px;
  margin: 10px 0;
  background-color: transparent;
}
</style>
