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
        /* webpackChunkName: "MembersView" */ "../views/MembersView.vue"
      );
    },
  },
  {
    path: "/dapp",
    name: "dappHome",
    component: function () {
      return import(/* webpackChunkName: "DappHome" */ "../views/DappHome.vue");
    },
  },
  {
    path: "/dapp/governance",
    name: "dappGovernance",
    component: function () {
      return import(
        /* webpackChunkName: "DappHome" */ "../views/DappGovernance.vue"
      );
    },
  },
  {
    path: "/dapp/members",
    name: "dappMembers",
    component: function () {
      return import(
        /* webpackChunkName: "DappHome" */ "../views/DappMembers.vue"
      );
    },
  },
  {
    path: "/dapp/profile",
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
