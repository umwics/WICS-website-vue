<template>
  <div class="card-container">
    <div class="card-top"></div>
    <div class="social">
      <component :is="socialMedia?.svgIcon"></component>
      <div class="description">
        <h4>{{ socialMedia?.name }}</h4>
        <a class="button" :href="socialMedia?.link" target="_blank">{{ socialMedia?.username }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  socialMedia: {
    type: Object,
    required: true
    // default: () => ({
    //     "svgIcon": '#',
    //     "name": "Social Media",
    //     "link": "#",
    //     "username": "umwics"
    // })
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
