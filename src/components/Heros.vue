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
    <div class="columns" v-if="selectedHero">
      <div class="column is-3">
        <header class="card-header">
          <p class="card-header-title">{{ fullName }}</p>
        </header>
        <div class="card-content">
          <div class="content">
            <div class="field">
              <label class="label" for="id">id</label>
              <label class="input" id="id" readonly>
                {{ selectedHero.id }}
              </label>
            </div>
            <div class="field">
              <label class="label" for="firstName">first name</label>
              <input
                class="input"
                id="firstName"
                v-model="selectedHero.firstName"
              />
            </div>
            <div class="field">
              <label for="show" class="checkbox">
                show more
                <input
                  type="checkbox"
                  class="is-primary"
                  id="show"
                  v-model="showMore"
                />
              </label>
            </div>
            <div class="field" v-show="showMore">
              <label class="label" for="lastName">last name</label>
              <input
                class="input"
                id="lastName"
                v-model="selectedHero.lastName"
              />
            </div>
            <div class="field" v-show="showMore">
              <label class="label" for="description">description</label>
              <input
                class="input"
                id="description"
                v-model="selectedHero.description"
              />
            </div>
            <div class="field" v-show="showMore">
              <label class="label" for="capeCounter">cape counter</label>
              <input
                class="input"
                name="capeCounter"
                type="number"
                v-model="selectedHero.capeCounter"
              />
            </div>
            <div class="field" v-show="showMore">
              <label class="label" for="capeMessage">cape message</label>
              <label class="input" name="capeMessage">{{ capeMessage }}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
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
  computed: {
    fullName() {
      return `${this.selectedHero?.firstName} ${this.selectedHero?.lastName}`;
    },
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
    handleTheCapes(newValue) {
      const value = parseInt(newValue, 10);
      switch (value) {
        case 0:
          this.capeMessage = "Where is my cape?";
          break;
        case 1:
          this.capeMessage = "One is all I need";
          break;
        case 2:
          this.capeMessage = "Alway have a spare";
          break;
        default:
          this.capeMessage = "You can never have enough capes";
          break;
      }
    },
  },
  watch: {
    'selectedHero.capeCounter': {
      immediate: true,
      handler(newValue, oldValue) {
        console.log(`Watcher evalauted. old=${oldValue}, new=${newValue}`);
        this.handleTheCapes(newValue);
      },
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
