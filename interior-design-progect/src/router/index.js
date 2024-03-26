import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import BlogPage from "@/pages/BlogPage.vue";
import DetailsPage from "@/pages/DetailsPage.vue";
import ProgectDetails from "@/pages/ProgectDetails";
import CategoriesPage from "@/pages/CategoriesPage";
import NotFound from "@/pages/NotFound";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomePage,
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogPage,
    },
    {
      path: "/details",
      name: "details",
      component: DetailsPage,
    },
    {
      path: "/progect",
      name: "progect",
      component: ProgectDetails,
    },
    {
      path: "/categories/:pageNumber?",
      name: "categories",
      component: CategoriesPage,
    },
    {
      path: "*",
      name: "notFound",
      component: NotFound,
    },
  ],
});
