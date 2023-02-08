<script setup lang="ts">
interface ILinksData {
  name: string;
  url: string;
}

const links: ILinksData[] = [
  {
    name: "Vite /",
    url: "https://vitejs.dev/",
  },
  {
    name: "Vue 3 /",
    url: "https://vuejs.org/",
  },
];
</script>

<template>
  <div class="content-links">
    <a
      v-for="(link, index) in links"
      v-bind:href="link.url"
      :key="index"
      target="_blank"
      rel="noopener"
    >
      {{ link.name }}
    </a>
  </div>
</template>

<style scoped>
.content-links {
  display: flex;
}
</style>
