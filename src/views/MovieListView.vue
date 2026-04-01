<script setup>
import moviesData from "../data/movies.json";
</script>

<template>
  <v-row>
    <v-col cols="12" class="mb-4">
      <h1
        class="disney-title text-h3 font-weight-bold text-primary border-b-lg border-secondary pb-2"
      >
        Magical Movie Library
      </h1>
    </v-col>

    <v-col
      v-for="movie in moviesData"
      :key="movie.id"
      cols="12"
      sm="6"
      md="4"
      lg="3"
    >
      <v-card
        class="mx-auto h-100 d-flex flex-column"
        hover
        :to="`/movies/${movie.id}`"
        border="sm"
      >
        <v-sheet
          height="120"
          :color="
            movie.studio === 'Pixar' ? 'blue-darken-2' : 'primary-darken-1'
          "
          class="d-flex align-center justify-center"
        >
          <v-icon size="64" color="secondary">mdi-castle</v-icon>
        </v-sheet>

        <v-card-item>
          <v-card-title class="text-h6 font-weight-bold text-primary">
            {{ movie.title }}
          </v-card-title>
          <v-card-subtitle class="text-secondary-darken-1 font-weight-bold">
            <v-icon size="small">mdi-calendar</v-icon> {{ movie.year }}
          </v-card-subtitle>
        </v-card-item>

        <v-card-text class="text-body-2 text-grey-darken-1">
          {{ movie.description }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
