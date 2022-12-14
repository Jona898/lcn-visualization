import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/GraphTest",
      name: "GraphTest",
      // route level code-splitting
      // this generates a separate chunk (GraphTest.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/GraphTest.vue"),
    },
    {
      path: "/TempTest",
      name: "TempTest",
      // route level code-splitting
      // this generates a separate chunk (TempTest.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/TempTest.vue"),
    },
    {
      path: "/:catchall(.*)*",
      name: "NotFound",
      component: () => import("../views/404NotFoundView.vue"),
    },
  ],
});

export default router;
