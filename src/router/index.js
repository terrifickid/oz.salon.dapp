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
    path: "/create-transfer",
    name: "transfer-form",
    component: function () {
      return import(
        /* webpackChunkName: "ViewTransfer" */ "../views/ViewTransferForm.vue"
      );
    },
  },
  {
    path: "/treasury",
    name: "treasury",
    component: function () {
      return import(
        /* webpackChunkName: "ViewTransfer" */ "../views/ViewTreasury.vue"
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
      return import(/* webpackChunkName: "ViewSell" */ "../views/ViewSell.vue");
    },
  },
  {
    path: "/kick",
    name: "kick",
    component: function () {
      return import(/* webpackChunkName: "ViewKick" */ "../views/ViewKick.vue");
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
    path: "/mission",
    name: "mission",
    component: function () {
      return import(
        /* webpackChunkName: "ViewMission" */ "../views/ViewMission.vue"
      );
    },
  },
  {
    path: "/faq",
    name: "faq",
    component: function () {
      return import(/* webpackChunkName: "ViewFaq" */ "../views/ViewFaq.vue");
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: function () {
      return import(
        /* webpackChunkName: "ViewContact" */ "../views/ViewContact.vue"
      );
    },
  },
  {
    path: "/apply",
    name: "apply",
    component: function () {
      return import(
        /* webpackChunkName: "ViewApply" */ "../views/ViewApply.vue"
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
    path: "/governance/:id",
    name: "proposal",
    component: function () {
      return import(
        /* webpackChunkName: "ViewGovernance" */ "../views/ViewProposal.vue"
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
