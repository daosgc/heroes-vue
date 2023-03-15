import { createRouter, createWebHistory } from "vue-router";
import HeroesView from "../views/HerosView.vue";
import PageNotFound from "../views/NotFoundView.vue";

const parseProps = (r) => ({ id: parseInt(r.params.id) });

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/heroes",
      name: "heroes",
      component: HeroesView,
    },
    {
      path: "/heroes/:id",
      name: "hero-detail",
      // props: true,
      props: parseProps,
      component: () => import("../views/HeroDetailsView.vue"),
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
      path: "/",
      redirect: "/heroes",
    },
    {
      path: "/:catchAll(.*)",
      component: PageNotFound,
    },
  ],
});

export default router;
