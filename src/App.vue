<template>
  <v-app>
    <MagicEffect :active="isMagicActive" />

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
        class="disney-title text-secondary font-weight-bold ml-4"
      >
        <div
          class="d-inline-flex flex-column align-center pt-3 cursor-pointer"
          style="line-height: 1; max-width: fit-content"
          @click="castMagic"
        >
          <v-icon
            icon="mdi-castle"
            :size="$vuetify.display.xs ? 'default' : 'x-small'"
            class="mb-1 magic-icon"
            :class="{ 'magic-cast': isMagicActive }"
            color="secondary"
          ></v-icon>

          <div class="d-none d-sm-flex align-center">
            <span
              class="text-subtitle-1 text-sm-h6 font-weight-black"
              style="letter-spacing: 1px"
              >Disney</span
            >
            <span class="text-caption ml-1 opacity-70 font-weight-medium"
              >DB</span
            >
          </div>

          <v-divider
            class="d-none d-sm-block border-opacity-50 w-100 mt-1"
            color="secondary"
            thickness="1"
          ></v-divider>
        </div>
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
        prepend-icon="mdi-movie-open"
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

<script setup lang="ts">
import { ref } from "vue";
import MagicEffect from "./components/MagicEffect.vue";

const isMagicActive = ref(false);

const castMagic = () => {
  if (isMagicActive.value) return;
  isMagicActive.value = true;
  // アニメーションが終わる1.5秒後にフラグを下ろす
  setTimeout(() => {
    isMagicActive.value = false;
  }, 1500);
};
</script>

<style scoped>
/* クリックできることを示すカーソル */
.cursor-pointer {
  cursor: pointer;
  user-select: none;
}

/* 魔法がかかったときのお城の輝き */
.magic-cast {
  filter: drop-shadow(0 0 10px #fff9c4) brightness(1.5);
  transform: scale(1.2);
  transition: all 0.3s ease;
}

.magic-icon {
  transition: all 0.3s ease;
}
</style>
