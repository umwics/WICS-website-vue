<template>
    <footer>
        <div id="footer-content">
            <div id="footer-left">
                <p>© 2025. University of Manitoba Women in Computer Science. All Rights Reserved.</p>
            </div>
            <div id="footer-right">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/team">Team</RouterLink>
                <RouterLink to="/events">Events</RouterLink>
                <RouterLink to="/outreach">Outreach</RouterLink>
                <RouterLink to="/lounge">Lounge</RouterLink>
                <RouterLink to="/contact-us">Contact Us</RouterLink>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
* {
    background-color: inherit;
}

footer {
    width: 100%;
}

#footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

#footer-left p {
    margin: 0;
    font-size: 1rem;
    color: var(--color-text-light);
}

#footer-right {
    display: flex;
}

#footer-right a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    transition: color 0.3s;
}

#footer-right a:hover {
    text-decoration: underline;
}

@media (max-width: 800px) {
    footer {
        background-color: var(--color-background-blue);
        color: var(--color-text-light);
        padding: 10px;
    }

    #footer-content {
        flex-direction: column;
        justify-content: center;
        text-align: center;
        padding: 15px 0;
        gap: 40px;
    }

    #footer-left p {
        font-size: 0.9rem;
    }

    #footer-right {
        gap: 10px;
        flex-direction: column;
        margin-top: 10px;
    }
}

@media (min-width: 801px) {
    footer {
        background-color: var(--color-background-blue);
        color: var(--color-text-light);
    }

    #footer-content {
        flex-direction: row;
        /* Horizontal layout on larger screens */
        padding: 15px 0;
    }

    #footer-right {
        flex-direction: row;
        gap: 10px;
    }
}

/* for router links */
a {
    text-decoration: none;
    color: var(--color-text-light);
    transition: 0.4s;
    padding: 7px;
}

a:hover {
    background-color: var(--color-background-dark-hover);
    border-radius: 20px;
}
</style>
