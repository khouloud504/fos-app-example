<template>
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4" v-for="(anime, index) in animeList" :key="index">
      <anime-card :anime="anime" @save-anime="saveAnime"></anime-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AnimeCard from "./AnimeCard.vue";

export default {
  components: {
    AnimeCard,
  },
  computed: {
    ...mapGetters(["animeList"]),
  },
  methods: {
    saveAnime(editedAnime) {
      this.$store.dispatch("updateAnime", editedAnime);
    },
  },
};
</script>

<style>
</style>
