<script setup>
import { ref, computed } from "vue";
import charactersData from "../data/characters.json";
import moviesData from "../data/movies.json";

const difficulty = ref(0); // 0 は未選択（全表示）
const character = ref(null);
const movieTitle = ref("");
const loading = ref(false);

// 現在の難易度ラベルを動的に表示
const difficultyLabel = computed(() => {
  return difficulty.value === 0
    ? "すべての魔法レベル"
    : `レベル ${difficulty.value}`;
});

const pickRandom = () => {
  loading.value = true;
  character.value = null;

  setTimeout(() => {
    // 難易度が0なら全リスト、それ以外ならフィルタリング
    let list =
      difficulty.value > 0
        ? charactersData.filter(
            (c) => Number(c.difficulty) === difficulty.value,
          )
        : charactersData;

    if (list.length > 0) {
      const selected = list[Math.floor(Math.random() * list.length)];
      character.value = selected;

      const movie = moviesData.find((m) => m.id === selected.movieId);
      movieTitle.value = movie ? movie.title : "Unknown Magic";
    } else {
      // 該当キャラがいない場合（念のため）
      alert("該当するキャラクターが見つかりませんでした。");
    }
    loading.value = false;
  }, 800);
};

// 難易度をリセットする関数
const resetDifficulty = () => {
  difficulty.value = 0;
};
</script>

<template>
  <v-row justify="center" align="center" style="min-height: 75vh">
    <v-col cols="12" sm="10" md="8">
      <v-card
        class="text-center pa-10"
        elevation="8"
        border="sm border-secondary"
        image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
        <template v-slot:image>
          <v-img
            gradient="to bottom right, rgba(26,35,126,.95), rgba(18,22,64,.9)"
          ></v-img>
        </template>

        <v-card-title class="disney-title text-h4 text-secondary mb-6">
          キャラクターを呼ぼう！
        </v-card-title>

        <div class="mb-8">
          <v-chip
            color="secondary"
            variant="outlined"
            class="mb-3 font-weight-bold"
          >
            {{ difficultyLabel }}
          </v-chip>

          <div class="d-flex align-center justify-center">
            <div style="width: 48px"></div>

            <v-rating
              v-model="difficulty"
              color="secondary-darken-1"
              active-color="secondary"
              empty-icon="mdi-star-outline"
              full-icon="mdi-star"
              hover
              clearable
            ></v-rating>

            <v-btn
              icon="mdi-close-circle"
              variant="text"
              color="white"
              @click="resetDifficulty"
              :style="{ visibility: difficulty > 0 ? 'visible' : 'hidden' }"
              style="width: 48px"
            ></v-btn>
          </div>
          <p class="text-caption text-white opacity-70 mt-1">
            星をクリックして難易度を選択
          </p>
        </div>

        <v-btn
          color="secondary"
          size="x-large"
          @click="pickRandom"
          :loading="loading"
          block
          class="text-primary font-weight-bold text-h6 Summon-btn"
          prepend-icon="mdi-auto-fix"
        >
          {{ loading ? "Summoning..." : "ビビディ・バビディ・ブー!" }}
        </v-btn>

        <v-expand-transition>
          <div v-if="character" class="mt-12 text-white">
            <v-chip
              color="purple-lighten-4"
              variant="flat"
              class="mb-5 text-primary font-weight-bold"
            >
              <v-icon start>mdi-castle</v-icon>
              {{ movieTitle }}
            </v-chip>

            <h2
              class="disney-title text-h2 font-weight-black text-white mb-2 text-glow"
            >
              {{ character.name }}
            </h2>
            <p class="text-h6 text-secondary-lighten-1 mb-8">
              {{ character.englishName }}
            </p>

            <v-divider class="mb-8 border-secondary"></v-divider>

            <v-card-actions class="justify-center">
              <v-btn
                variant="outlined"
                color="secondary"
                :to="`/characters/${character.id}`"
                size="large"
                class="bg-rgba-white-10"
              >
                プロフィールを見る
              </v-btn>
            </v-card-actions>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.Summon-btn {
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.4) !important;
  transition: all 0.3s ease;
}
.Summon-btn:hover {
  transform: scale(1.02);
  box-shadow: 0 0 30px rgba(255, 215, 0, 0.6) !important;
}
.text-glow {
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}
.bg-rgba-white-10 {
  background-color: rgba(255, 255, 255, 0.05);
}
</style>
