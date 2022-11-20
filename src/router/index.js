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
    name: "About",
    component: function () {
      return import(/* webpackChunkName: "About" */ "../views/ViewAbout.vue");
    },
  },
  {
    path: "/resources",
    name: "Resources",
    component: function () {
      return import(
        /* webpackChunkName: "Resources" */ "../views/ViewResources.vue"
      );
    },
  },
  {
    path: "/collection",
    name: "Collection",
    component: function () {
      return import(
        /* webpackChunkName: "CollectionView" */ "../views/ViewCollection.vue"
      );
    },
  },
  {
    path: "/collection/:id",
    name: "artwork",
    component: function () {
      return import(
        /* webpackChunkName: "CollectionView" */ "../views/ViewCollection.vue"
      );
    },
  },
  {
    path: "/members",
    name: "Members ",
    component: function () {
      return import(
        /* webpackChunkName: "ViewMemberPub" */ "../views/ViewMembers.vue"
      );
    },
  },
  {
    path: "/mission",
    name: "Mission",
    component: function () {
      return import(
        /* webpackChunkName: "ViewMission" */ "../views/ViewMission.vue"
      );
    },
  },
  {
    path: "/faq",
    name: "FAQ",
    component: function () {
      return import(/* webpackChunkName: "ViewFaq" */ "../views/ViewFaq.vue");
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: function () {
      return import(
        /* webpackChunkName: "ViewContact" */ "../views/ViewContact.vue"
      );
    },
  },
  {
    path: "/apply",
    name: "Apply",
    component: function () {
      return import(
        /* webpackChunkName: "ViewApply" */ "../views/ViewApply.vue"
      );
    },
  },
  {
    path: "/manage",
    name: "Manage",
    component: function () {
      return import(
        /* webpackChunkName: "ViewApply" */ "../views/ViewManage.vue"
      );
    },
    children: [
      {
        path: "start",
        name: "Start",
        component: function () {
          return import(
            /* webpackChunkName: "ViewJoin" */ "../views/manage/ViewStart.vue"
          );
        },
      },
      {
        path: "treasury",
        name: "Treasury",
        component: function () {
          return import(
            /* webpackChunkName: "ViewTreasury" */ "../views/manage/ViewTreasury.vue"
          );
        },
      },
      {
        path: "proposals",
        name: "Proposals",
        component: function () {
          return import(
            /* webpackChunkName: "ViewProposals" */ "../views/manage/ViewProposals.vue"
          );
        },
      },
      {
        path: "proposals/:address",
        name: "Member Proposals",
        component: function () {
          return import(
            /* webpackChunkName: "ViewProposals" */ "../views/manage/ViewProposals.vue"
          );
        },
      },
      {
        path: "invest",
        name: "Invest",
        component: function () {
          return import(
            /* webpackChunkName: "ViewInvest" */ "../views/manage/ViewInvest.vue"
          );
        },
      },
      {
        path: "exchange",
        name: "Exchange",
        component: function () {
          return import(
            /* webpackChunkName: "ViewTransfer" */ "../views/manage/ViewExchangeForm.vue"
          );
        },
      },
      {
        path: "propose",
        name: "Propose",
        component: function () {
          return import(
            /* webpackChunkName: "ViewPropose" */ "../views/manage/ViewPropose.vue"
          );
        },
      },
      {
        path: "acquire",
        name: "Acquire",
        component: function () {
          return import(
            /* webpackChunkName: "ViewAcquire" */ "../views/manage/ViewAcquire.vue"
          );
        },
      },
      {
        path: "sell",
        name: "Sell",
        component: function () {
          return import(
            /* webpackChunkName: "ViewSell" */ "../views/manage/ViewSell.vue"
          );
        },
      },
      {
        path: "kick",
        name: "Kick",
        component: function () {
          return import(
            /* webpackChunkName: "ViewKick" */ "../views/manage/ViewKick.vue"
          );
        },
      },
      {
        path: "profile",
        name: "Profile",
        component: function () {
          return import(
            /* webpackChunkName: "ViewSell" */ "../views/manage/ViewProfile.vue"
          );
        },
      },
      {
        path: "members",
        name: "Members",
        component: function () {
          return import(
            /* webpackChunkName: "ViewMembers" */ "../views/manage/ViewMembers.vue"
          );
        },
      },
      {
        path: ":id",
        name: "Proposal",
        component: function () {
          return import(
            /* webpackChunkName: "ViewProposal" */ "../views/manage/ViewProposal.vue"
          );
        },
      },
    ],
  },

  {
    path: "/join",

    component: function () {
      return import(/* webpackChunkName: "ViewJoin" */ "../views/ViewJoin.vue");
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
