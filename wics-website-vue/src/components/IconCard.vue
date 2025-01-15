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
const props = defineProps({
    socialMedia: { type: Object }
})
</script>

<style scoped>
.social {
    display: flex;
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
    width: 150px;
    height: 150px;
    min-width: 100px;
    min-height: 100px;
    fill: var(--color-svg-dark_blue);
}
</style>