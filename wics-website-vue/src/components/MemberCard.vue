<template>
    <div class="card-container">
        <div class="member-info-container">
            <img :src="member?.image" :alt="member?.altImage">
            <div>
                <h3>{{ member?.name }}</h3>
                <p class="position"><i>{{ member?.position }}</i></p>
                <div class="tag">
                    <p>{{ member?.memberType }}</p>
                    <p>{{ member?.pronouns }}</p>
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
    member: { 
        type: Object, 
        required: true
    },
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
}

.member-descr-container {
    font-size: 13px;
    padding: 4%;
}
</style>