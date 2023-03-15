<template>
  <div class="content-container">
    <div class="section content-title-group">
      <h2 class="title">Heroes</h2>
    </div>
    <div class="columns">
      <div class="column is-3">
        <header class="card-header">
          <p class="card-header-title">Heroes List</p>
        </header>
        <ul>
          <li v-for="hero in heroes" :key="hero.id">
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <div :key="hero.name" class="name">
                    {{ hero.firstName }} {{ hero.lastName }}
                  </div>
                  <div class="description">{{ hero.description }}</div>
                </div>
              </div>
              <footer class="card-footer">
                <router-link
                  class="link card-footer-item"
                  :to="{ name: 'hero-detail', params: { id: hero.id } }"
                >
                  <button>
                    <i class="fas fa-check"></i>
                    <span>Select</span>
                  </button>
                </router-link>
              </footer>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { data } from "../shared";

export default {
  name: "HeroesView",
  data() {
    return {
      showMore: false,
      heroes: [],
      capeMessage: "",
      currentDate: new Date().valueOf(),
    };
  },
  async created() {
    await this.loadHeroes();
  },
  components: {},
  methods: {
    async getHeroes() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(heroes), 1500);
      });
    },
    async loadHeroes() {
      this.heroes = await data.getHeroes();
    },
  },
  filters: {
    ShortDate: (value) => {
      const day = new Date(value).getDay();
      const month = new Date(value).getMonth();
      const year = new Date(value).getFullYear();
      return `${day}/${month}/${year}`;
    },
  },
};
</script>
