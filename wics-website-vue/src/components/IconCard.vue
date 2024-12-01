<template>
    <div>
        <!-- <slot></slot> -->
        <component :is="socialMedia?.svgIcon" />
        <div>
            <h4>{{ socialMedia?.name }}</h4>
            <a :href="socialMedia?.link" target="_blank">{{ socialMedia?.username }}</a>
        </div>
    </div>

</template>

<script setup>
const props = defineProps({
    socialMedia: { type: Object },
})
</script>

<style scoped>
svg {
    width: 100px;
    height: 100px;
    fill: var(--color-text-blue);
}

a {
    text-decoration: none;
    color: var(--color-text-dark);

    transition: 0.2s;
    padding: 2px;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;

    border-radius: 20px;
}

a:hover {
    background-color: var(--color-background-dark-hover);
    color: var(--color-text-light);
}
</style>