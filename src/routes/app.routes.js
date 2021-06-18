import Login from "../pages/Login.vue";
import Home from "../pages/Home.vue";

export default [
  {
    path: "/login",
    name: "login",
    component: Login,
    beforeEnter(to, from, next) {
      // On va vérifier qu'il n'est pas déjà connecté avant d'accéder à cette page
      // Si déjà connecté, on redirige simplement vers la page home

      const valueToken = localStorage.getItem(
        'X-TOKEN'
      );

      if (valueToken) {
        next({ name: "home" });
      } else {
        next();
      }
    },
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    beforeEnter(to, from, next) {
      const valueToken = localStorage.getItem(
        'X-TOKEN'
      );

      if (!valueToken) {
        // En redirigeant, on passe un paramètre pour indiquer qu'il n'est pas connecté
        next({ name: "login", query: { notLogged: true } });
      } else {
        next();
      }
    },
  },
  {
    path: "/",
    redirect: "/login",
  },
];
