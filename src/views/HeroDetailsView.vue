<template>
  <div>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">{{ fullName }}</p>
      </header>
      <div class="card-content">
        <div class="content">
          <div class="field">
            <label class="label" for="id">id</label>
            <label class="input" id="id" readonly>
              {{ hero.id }}
            </label>
          </div>
          <div class="field">
            <label class="label" for="firstName">first name</label>
            <input class="input" id="firstName" v-model="hero.firstName" />
          </div>
          <div class="field">
            <label class="label" for="lastName">last name</label>
            <input class="input" id="lastName" v-model="hero.lastName" />
          </div>
          <div class="field">
            <label class="label" for="description">description</label>
            <input class="input" id="description" v-model="hero.description" />
          </div>
          <div class="field">
            <label class="label" for="capeCounter">cape counter</label>
            <input
              class="input"
              name="capeCounter"
              type="number"
              v-model="hero.capeCounter"
            />
          </div>
          <div class="field">
            <label class="label" for="capeMessage">cape message</label>
            <label class="input" name="capeMessage">{{ capeMessage }}</label>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <button
          class="link card-footer-item cancel-button"
          @click="cancelHero()"
        >
          <i class="fas fa-undo"></i>
          <span>Cancel</span>
        </button>
        <button class="link card-footer-item" @click="saveHero()">
          <i class="fas fa-save"></i>
          <span>Save</span>
        </button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { lifecycleHooks, dataService } from "../shared";

export default {
  name: "HeroDetails",
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  async created() {
    this.hero = await dataService.getHero(this.id);
  },
  data() {
    return {
      hero: {},
    };
  },
  mixins: [lifecycleHooks],
  computed: {
    fullName() {
      return this.hero ? `${this.hero.firstName} ${this.hero.lastName}` : "";
    },
  },
  methods: {
    cancelHero() {
      this.$router.push({ name: "heroes" });
    },
    async saveHero() {
      await dataService.updateHero(this.hero);
      this.$router.push({ name: "heroes" });
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
    "hero.capeCounter": {
      immediate: true,
      handler(newValue, oldValue) {
        console.log(
          `CapeCounter watcher evalauted. old=${oldValue}, new=${newValue}`
        );
        this.handleTheCapes(newValue);
      },
    },
  },
  filters: {
    shortDate: function (value) {
      return format(value, displayDateFormat);
    },
  },
};
</script>
