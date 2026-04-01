<script setup>
import { computed } from "vue";
import charactersData from "../data/characters.json";
import moviesData from "../data/movies.json";

const props = defineProps(["charId"]);
const char = computed(() => charactersData.find((c) => c.id == props.charId));
const movie = computed(() =>
  moviesData.find((m) => m.id == char.value?.movieId),
);
</script>

<template>
  <v-row justify="center" v-if="char">
    <v-col cols="12" md="10" lg="8">
      <v-card border="sm border-secondary" elevation="6">
        <v-sheet
          gradient="to right, #FFD700, #FFFFFF"
          class="pa-8 d-flex align-center"
        >
          <v-icon size="64" color="primary" class="mr-6">mdi-sparkles</v-icon>
          <div>
            <div class="text-overline text-primary-darken-1 mb-1">
              Magical Profile
            </div>
            <h1 class="disney-title text-h3 font-weight-black text-primary">
              {{ char.name }}
            </h1>
            <p class="text-h6 text-primary-lighten-1">{{ char.englishName }}</p>
          </div>
        </v-sheet>

        <v-card-text class="pa-8 bg-white">
          <v-list class="bg-white">
            <v-list-item class="px-0">
              <v-list-item-subtitle class="text-grey-darken-1"
                >登場作品</v-list-item-subtitle
              >
              <v-list-item-title class="text-h5 text-primary font-weight-bold">
                <router-link
                  :to="`/movies/${movie.id}`"
                  style="text-decoration: none; color: inherit"
                  class="d-flex align-center"
                >
                  <v-icon color="secondary" class="mr-2">mdi-castle</v-icon>
                  {{ movie?.title }}
                  <v-icon size="small" class="ml-2">mdi-open-in-new</v-icon>
                </router-link>
              </v-list-item-title>
            </v-list-item>

            <v-divider class="my-6 border-secondary"></v-divider>

            <v-list-item class="px-0">
              <v-list-item-subtitle class="mb-3 text-grey-darken-1"
                >Magical Description / 解説</v-list-item-subtitle
              >
              <p class="text-body-1 text-black" style="line-height: 1.8">
                {{ char.description }}
              </p>
            </v-list-item>

            <v-list-item v-if="char.quote" class="px-0 mt-6">
              <v-sheet
                color="primary-lighten-5"
                class="pa-6 border-s-lg border-secondary rounded-e-xl"
              >
                <v-list-item-subtitle class="mb-2 text-primary"
                  >Memorable Quote / 名言</v-list-item-subtitle
                >
                <p
                  class="text-h5 font-italic text-primary-darken-2"
                  style="font-family: serif"
                >
                  「{{ char.quote }}」
                </p>
              </v-sheet>
            </v-list-item>
          </v-list>

          <div class="mt-10">
            <p class="text-caption text-grey-darken-1 mb-3">
              Magical Tags / ヒント
            </p>
            <v-chip-group>
              <v-chip
                v-for="hint in char.hint"
                :key="hint"
                variant="tonal"
                color="primary"
                size="comfortable"
                prepend-icon="mdi-tag-outline"
              >
                {{ hint }}
              </v-chip>
            </v-chip-group>
          </div>
        </v-card-text>

        <v-divider class="border-secondary"></v-divider>

        <v-card-actions class="pa-6 bg-blue-grey-lighten-5">
          <v-btn
            variant="text"
            color="primary"
            @click="$router.back()"
            prepend-icon="mdi-arrow-left"
            >戻る</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            variant="elevated"
            to="/movies"
            prepend-icon="mdi-library-movie"
          >
            他の作品を探す
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
