import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import MovieListView from "../views/MovieListView.vue";
import MovieDetailView from "../views/MovieDetailView.vue";
import CharacterDetailView from "../views/CharacterDetailView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/movies", component: MovieListView },
  { path: "/movies/:movieId", component: MovieDetailView, props: true },
  { path: "/characters/:charId", component: CharacterDetailView, props: true },
];

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
