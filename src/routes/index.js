import { createRouter, createWebHistory } from "vue-router";
import APP_ROUTES from "./app.routes";

export default createRouter({
  history: createWebHistory(),
  routes: APP_ROUTES,
});
