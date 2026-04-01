<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import moviesData from "../data/movies.json";
import charactersData from "../data/characters.json";

const route = useRoute();
const movieId = Number(route.params.movieId);

const movie = computed(() => moviesData.find((m) => m.id === movieId));
const movieCharacters = computed(() =>
  charactersData.filter((c) => c.movieId === movieId),
);
</script>

<template>
  <div v-if="movie">
    <v-btn
      variant="text"
      prepend-icon="mdi-arrow-left"
      to="/movies"
      class="mb-4"
    >
      作品一覧に戻る
    </v-btn>

    <v-sheet border rounded class="pa-6 mb-8 bg-blue-grey-lighten-5">
      <h1 class="text-h4 font-weight-bold">{{ movie.title }}</h1>
      <p class="text-subtitle-1 mb-2">
        {{ movie.englishTitle }} ({{ movie.year }})
      </p>
      <p class="text-body-1">{{ movie.description }}</p>
    </v-sheet>

    <h2 class="text-h5 mb-4 px-2">
      登場キャラクター ({{ movieCharacters.length }})
    </h2>

    <v-row>
      <v-col
        v-for="char in movieCharacters"
        :key="char.id"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card :to="`/characters/${char.id}`" hover border elevation="1">
          <v-card-item>
            <v-card-subtitle class="text-primary font-weight-bold">
              {{ movie.title }}
            </v-card-subtitle>
            <v-card-title class="text-h6">{{ char.name }}</v-card-title>
          </v-card-item>

          <v-card-text>
            <div class="d-flex align-center">
              <span class="text-caption mr-2">難易度:</span>
              <v-rating
                :model-value="char.difficulty"
                readonly
                density="compact"
                size="x-small"
                color="orange"
              ></v-rating>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
