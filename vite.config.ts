// vite.config.js
import { defineConfig } from "vite";
import vue from "@vue/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  base: "/disney-app/", // ★重要：ここを「GitHubのリポジトリ名」と同じにしてください
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
