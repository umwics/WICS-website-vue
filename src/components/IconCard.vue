<template>
  <div class="card-container">
    <div class="card-top"></div>
    <div class="social">
      <component :is="svgIcon" data-test="svg"></component>
      <div class="description">
        <h4>{{ name }}</h4>
        <a v-if="link && username" class="button" :href="link" target="_blank" data-test="button">
          {{ username }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  svgIcon: {
    type: Object,
    default: undefined
  },
  name: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: ''
  },
  username: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.social {
  display: flex;
  padding: 10px;
  padding-left: 20px;

  color: var(--color-text-dark);
}

.description {
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;

  text-align: start;

  /* accounts for the space in an svg */
  padding-right: 30px;
}

svg {
  fill: var(--color-svg-dark_blue);
}

@media (max-width: 800px) {
  svg {
    width: 100px;
    height: 100px;
    min-width: 90px;
    min-height: 90px;
  }
}

@media (min-width: 801px) {
  svg {
    width: 150px;
    height: 150px;
    max-width: 200px;
    max-height: 200px;
  }
}
</style>
