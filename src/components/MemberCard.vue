<template>
  <div class="card-container">
    <div class="member-info-container">
      <img :src="image" :alt="altImage" data-test="image" />
      <div>
        <h3>{{ name }}</h3>
        <p class="position">
          <i>{{ position }}</i>
        </p>
        <div class="tags">
          <div class="tag">
            <p>{{ memberType }}</p>
          </div>
          <div v-if="pronouns" class="tag" data-test="pronouns">
            <p>{{ pronouns }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="description" class="member-descr-container" data-test="description">
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
import defaultImage from '@/assets/data/team/defaultMember.jpeg'
const defaultAltText =
  'Gray placeholder icon indicating that no photo has been submitted for this person.'
</script>

<script setup>
defineProps({
  altImage: {
    type: String,
    default: defaultAltText
  },
  image: {
    type: String,
    default: defaultImage,
    validator(value, props) {
      // ensure that either the default image is used with the default alt,
      // or a custom image has custom alt
      return value === defaultImage
        ? props.altImage === defaultAltText
        : props.altImage !== defaultAltText
    }
  },
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  memberType: {
    type: String
  },
  pronouns: {
    type: String
  },
  description: {
    type: String
  }
})
</script>

<style scoped>
.tags {
  display: flex;
  gap: 5px;
}

.member-info-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

@media (max-width: 800px) {
  .card-container {
    display: flex;
    flex-direction: column;

    height: fit-content;
    padding: 3%;
    border: 2px solid var(--color-border-darker_blue);
    border-radius: 30px;
    margin: 3%;

    box-shadow: 3px 4px var(--color-shadow-dark);
    text-align: start;
  }

  .member-info-container {
    padding: 2%;
    column-gap: 10px;
  }

  .member-info-container img {
    border-radius: 50%;
    min-width: 90px;
    min-height: 90px;
    width: 90px;
    height: 90px;

    object-fit: cover;
  }
}

@media (min-width: 801px) {
  .card-container {
    display: flex;
    flex-direction: column;

    height: 100%;
    padding: 2%;
    border: 2px solid var(--color-border-darker_blue);
    border-radius: 30px;
    margin: 2%;

    box-shadow: 5px 5px var(--color-shadow-dark);
    text-align: start;
  }

  .member-info-container {
    padding: 3%;
    padding-bottom: 0;
    column-gap: 15px;
  }

  .member-info-container img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    max-width: 100px;
    max-height: 100px;

    object-fit: cover;
  }
}

.position {
  font-size: 11px;
  color: var(--color-text-gray);
}

.tag {
  background-color: var(--color-background-blue);
  width: fit-content;
  height: fit-content;

  border: 2px solid var(--color-background-blue);
  border-radius: 30px;

  margin: 2% 0%;
  padding: 2% 4%;

  font-size: 11px;
  color: var(--color-text-light);

  flex-shrink: 0;
}

.member-descr-container {
  font-size: 13px;
  padding: 4%;
}
</style>
