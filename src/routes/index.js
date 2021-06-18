import { createRouter, createWebHistory } from 'vue-router';
import MovieList from '../components/MovieList.vue';
import Login from '../components/Login.vue';

const routes = [
  { path: '/home', component: MovieList, name: 'movie-list' },
  { path: '/', component: Login, name: 'login' },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
