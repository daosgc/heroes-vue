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
        <ul class="list is-hoverable">
          <li v-for="hero in heroes" :key="hero.id">
            <a
              class="list-item"
              @click="selectedHero = hero"
              :class="{ 'is-active': selectedHero === hero }"
              ><span>{{ hero.firstName }}</span></a
            >
          </li>
        </ul>
      </div>
    </div>
    <HeroDetails
      :hero="selectedHero"
      @save="saveHero"
      @cancel="cancelHero"
      v-if="selectedHero"
    />
  </div>
</template>

<script lang="ts">
import HeroDetails from '@/components/HeroDetails.vue';

const heroes = [
  {
    id: 10,
    firstName: "Ella",
    lastName: "Papa",
    description: "fashionista",
    capeCounter: 2,
  },
  {
    id: 20,
    firstName: "Madelyn",
    lastName: "Papa",
    description: "the cat whisperer",
    capeCounter: 0,
  },
  {
    id: 30,
    firstName: "Haley",
    lastName: "Papa",
    description: "pen wielder",
    capeCounter: 1,
  },
  {
    id: 40,
    firstName: "Landon",
    lastName: "Papa",
    description: "arc trooper",
    capeCounter: 2,
  },
];

export default {
  name: "HeroesComponent",
  data() {
    return {
      selectedHero: undefined,
      showMore: false,
      heroes: [],
      capeMessage: "",
      currentDate: new Date().valueOf(),
    };
  },
  created() {
    this.loadHeroes();
  },
  components: {
    HeroDetails,
  },
  methods: {
    async getHeroes() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(heroes), 1500);
      });
    },
    async loadHeroes() {
      this.heroes = await this.getHeroes();
    },
    cancelHero() {
      this.selectedHero = undefined;
    },
    saveHero(hero) {
      const index = this.heroes.findIndex(h => h.id === hero.id);
      this.heroes.splice(index, 1, hero);
      this.heroes = [...this.heroes];
      this.selectedHero = undefined;
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
