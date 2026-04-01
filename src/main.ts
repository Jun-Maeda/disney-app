import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";

// Google Fontsの読み込み（index.htmlに書くのが一般的ですが、ここでも可能です）
const link = document.createElement("link");
link.rel = "stylesheet";
link.href =
  "https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Noto+Sans+JP:wght@400;700&display=swap";
document.head.appendChild(link);

const disneyTheme = {
  dark: false,
  colors: {
    background: "#F0F2F5", // 薄いグレー
    surface: "#FFFFFF",
    primary: "#1A237E", // ミッドナイトブルー（魔法の夜空）
    "primary-darken-1": "#121640",
    secondary: "#FFD700", // ゴールド（ピクシーダスト）
    "secondary-darken-1": "#C5A000",
    accent: "#8E24AA", // パープル（邪悪な魔法、または神秘的）
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: "disneyTheme",
    themes: {
      disneyTheme,
    },
  },
  // グローバルなスタイル定義
  defaults: {
    VCard: {
      rounded: "xl", // カードの角を大きく丸く
      elevation: 3, // ソフトな影
    },
    VBtn: {
      rounded: "pill", // ボタンを丸く
      class: "text-none", // 大文字変換を無効化
    },
    VChip: {
      rounded: "lg",
    },
  },
});

createApp(App).use(router).use(vuetify).mount("#app");

// タイトル用のフォントスタイルをCSSで定義
const style = document.createElement("style");
style.textContent = `
  .disney-title {
    font-family: 'Cinzel', serif !important;
    letter-spacing: 0.05em !important;
  }
  .v-application {
    font-family: 'Noto Sans JP', sans-serif !important;
  }
`;
document.head.appendChild(style);
