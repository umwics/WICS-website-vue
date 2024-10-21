<template>
    <div class="card-container">
        <div class="member-info-container">
            <img :src="member?.image">
            <div>
                <h3>{{ member?.name }}</h3>
                <p class="position"><i>{{ member?.position }}</i></p>
                <div class="tag">
                    <p>{{ member?.memberType }}</p>
                </div>
            </div>
        </div>
        <div class="member-descr-container">
            <p>{{ member?.description }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    member: { type: Object },
})
</script>

<style scoped>
.member-info-container {
    display: flex;
    flex-direction: row;
    align-items: center;
}

@media (max-width: 800px) {
    .card-container {
        display: flex;
        flex-direction: column;

        padding: 4%;
        border: 2px solid var(--color-border-dark);
        border-radius: 30px;
        margin: 3%;

        box-shadow: 3px 4px var(--color-shadow-dark);
        text-align: start;
    }

    .member-info-container img {
        border-radius: 50%;
        min-height: 100px;
        min-width: 100px;
        max-height: 100px;
        max-width: 100px;
        overflow: hidden;
        padding: 2%;
    }
}

@media (min-width: 801px) {
    .card-container {
        display: flex;
        flex-direction: column;

        padding: 2%;
        border: 2px solid var(--color-border-dark);
        border-radius: 30px;
        margin: 2%;

        box-shadow: 5px 5px var(--color-shadow-dark);
        text-align: start;
    }

    .member-info-container img {
        border-radius: 50%;
        min-height: 100px;
        min-width: 100px;
        max-height: 100px;
        max-width: 100px;
        overflow: hidden;
        padding: 2%;
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
    border-radius: 30px;
    margin: 2% 0%;
    padding: 2% 4%;

    font-size: 11px;
    color: var(--color-text-light);
}

.member-descr-container {
    font-size: 13px;
    padding: 4%;
}
</style>