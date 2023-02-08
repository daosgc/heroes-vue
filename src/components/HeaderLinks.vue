<script lang="ts">
import type { ILinksData } from "@/interfaces/common.interface";

const links: ILinksData[] = [
  {
    name: "Vite",
    url: "https://vitejs.dev/",
  },
  {
    name: "Vue 3",
    url: "https://vuejs.org/",
  },
];

export default {
  data() {
    return {
      links,
    };
  },
};
</script>

<template>
  <div class="content-links">
    <div v-for="(link, index) in links" :key="index">
      <a v-bind:href="link.url" target="_blank" rel="noopener">
        {{ link.name }}
      </a>
      <span>, </span>
    </div>
  </div>
</template>

<style scoped>
.content-links {
  display: flex;
}
</style>
