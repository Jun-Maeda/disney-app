<template>
  <v-app>
    <v-app-bar
      color="primary"
      image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      class="border-b-sm border-secondary"
      elevation="4"
    >
      <template v-slot:image>
        <v-img
          gradient="to top right, rgba(26,35,126,.9), rgba(18,22,64,.8)"
        ></v-img>
      </template>

      <v-app-bar-title
        class="disney-title text-h5 text-secondary font-weight-bold"
      >
        Disney Character DB
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn
        variant="text"
        to="/"
        prepend-icon="mdi-auto-fix"
        class="text-secondary"
      >
        Random
      </v-btn>
      <v-btn
        variant="text"
        to="/movies"
        prepend-icon="mdi-library-movie"
        class="text-secondary"
      >
        Movies
      </v-btn>
    </v-app-bar>

    <v-main class="bg-background">
      <v-container class="pa-6">
        <router-view v-slot="{ Component }">
          <v-fade-transition mode="out-in">
            <component :is="Component" />
          </v-fade-transition>
        </router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
