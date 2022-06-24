import { createRouter, createWebHistory } from "vue-router";
import ViewHome from "../views/ViewHome.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: ViewHome,
  },
  {
    path: "/about",
    name: "about",
    component: function () {
      return import(/* webpackChunkName: "About" */ "../views/ViewAbout.vue");
    },
  },
  {
    path: "/collection",
    name: "collection",
    component: function () {
      return import(
        /* webpackChunkName: "CollectionView" */ "../views/ViewCollection.vue"
      );
    },
  },
  {
    path: "/invest",
    name: "invest",
    component: function () {
      return import(
        /* webpackChunkName: "ViewInvest" */ "../views/ViewInvest.vue"
      );
    },
  },
  {
    path: "/transfer",
    name: "transfer",
    component: function () {
      return import(
        /* webpackChunkName: "ViewTransfer" */ "../views/ViewTransfer.vue"
      );
    },
  },
  {
    path: "/propose",
    name: "propose",
    component: function () {
      return import(
        /* webpackChunkName: "ViewPropose" */ "../views/ViewPropose.vue"
      );
    },
  },
  {
    path: "/collect",
    name: "collect",
    component: function () {
      return import(
        /* webpackChunkName: "ViewCollect" */ "../views/ViewCollect.vue"
      );
    },
  },
  {
    path: "/sell",
    name: "sell",
    component: function () {
      return import(
        /* webpackChunkName: "ViewCollect" */ "../views/ViewSell.vue"
      );
    },
  },
  {
    path: "/members",
    name: "members",
    component: function () {
      return import(
        /* webpackChunkName: "ViewMember" */ "../views/ViewMembers.vue"
      );
    },
  },
  {
    path: "/join",
    name: "join",
    component: function () {
      return import(/* webpackChunkName: "ViewJoin" */ "../views/ViewJoin.vue");
    },
  },
  {
    path: "/governance",
    name: "governance",
    component: function () {
      return import(
        /* webpackChunkName: "ViewGovernance" */ "../views/ViewGovernance.vue"
      );
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: function () {
      return import(
        /* webpackChunkName: "ViewProfile" */ "../views/ViewProfile.vue"
      );
    },
  },
  {
    path: "/:catchAll(.*)",
    component: function () {
      return import(
        /* webpackChunkName: "ViewProfile" */ "../views/ViewBlank.vue"
      );
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL + "#"),
  routes,
});

export default router;
