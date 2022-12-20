import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard,
      children: [
        {
          path: "/",
          name: "home",
          component: Home,
        },
        {
          path: "/about",
          name: "about",
          component: () => import("./views/About.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});

export default router;
