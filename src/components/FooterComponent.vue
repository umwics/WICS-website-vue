<template>
  <footer>
    <div class="footer-content">
      <p>
        © {{ currentYear }} University of Manitoba Women in Computer Science. All Rights Reserved.
      </p>
      <p>
        This work is licensed under a Creative Commons Attribute-NonCommercial-ShareAlike 4.0
        International License.
      </p>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
* {
  background-color: inherit;
}

footer {
  width: 100%;
  background-color: var(--color-background-blue);
  color: var(--color-text-light);
  text-align: center;
  padding: 20px;
}

.footer-content p {
  margin: 0;
  font-size: 1rem;
}

@media (max-width: 800px) {
  footer {
    padding: 15px;
  }

  .footer-content p {
    font-size: 0.9rem;
  }
}

@media (min-width: 801px) {
  footer {
    padding: 20px;
  }

  .footer-content p {
    font-size: 1rem;
  }
}
</style>
