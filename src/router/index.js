import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: function () {
      return import(/* webpackChunkName: "About" */ "../views/AboutView.vue");
    },
  },
  {
    path: "/collection",
    name: "collection",
    component: function () {
      return import(
        /* webpackChunkName: "CollectionView" */ "../views/CollectionView.vue"
      );
    },
  },
  {
    path: "/members",
    name: "members",
    component: function () {
      return import(
        /* webpackChunkName: "MembersView" */ "../views/ViewMembers.vue"
      );
    },
  },
  {
    path: "/join",
    name: "dappHome",
    component: function () {
      return import(/* webpackChunkName: "DappHome" */ "../views/DappHome.vue");
    },
  },
  {
    path: "/governance",
    name: "governance",
    component: function () {
      return import(
        /* webpackChunkName: "DappHome" */ "../views/ViewGovernance.vue"
      );
    },
  },
  {
    path: "/profile",
    name: "dappProfile",
    component: function () {
      return import(
        /* webpackChunkName: "DappHome" */ "../views/DappProfile.vue"
      );
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL + "#"),
  routes,
});

export default router;
