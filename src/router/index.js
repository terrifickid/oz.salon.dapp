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
    path: "/resources",
    name: "resources",
    component: function () {
      return import(
        /* webpackChunkName: "Resources" */ "../views/ViewResources.vue"
      );
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
    path: "/manage",
    name: "manage",
    component: function () {
      return import(
        /* webpackChunkName: "ViewApply" */ "../views/ViewManage.vue"
      );
    },
    children: [
      {
        path: "start",
        component: function () {
          return import(
            /* webpackChunkName: "ViewJoin" */ "../views/manage/ViewStart.vue"
          );
        },
      },
      {
        path: "treasury",
        component: function () {
          return import(
            /* webpackChunkName: "ViewTreasury" */ "../views/manage/ViewTreasury.vue"
          );
        },
      },
      {
        path: "proposals",
        component: function () {
          return import(
            /* webpackChunkName: "ViewProposals" */ "../views/manage/ViewProposals.vue"
          );
        },
      },
      {
        path: "invest",
        component: function () {
          return import(
            /* webpackChunkName: "ViewInvest" */ "../views/manage/ViewInvest.vue"
          );
        },
      },
      {
        path: "exchange",

        component: function () {
          return import(
            /* webpackChunkName: "ViewTransfer" */ "../views/manage/ViewExchangeForm.vue"
          );
        },
      },
      {
        path: "propose",

        component: function () {
          return import(
            /* webpackChunkName: "ViewPropose" */ "../views/manage/ViewPropose.vue"
          );
        },
      },
      {
        path: "acquire",

        component: function () {
          return import(
            /* webpackChunkName: "ViewCollect" */ "../views/manage/ViewCollect.vue"
          );
        },
      },
      {
        path: "sell",

        component: function () {
          return import(
            /* webpackChunkName: "ViewSell" */ "../views/manage/ViewSell.vue"
          );
        },
      },
      {
        path: "profile",

        component: function () {
          return import(
            /* webpackChunkName: "ViewSell" */ "../views/manage/ViewProfile.vue"
          );
        },
      },
      {
        path: "members",

        component: function () {
          return import(
            /* webpackChunkName: "ViewMembers" */ "../views/manage/ViewMembers.vue"
          );
        },
      },
      {
        path: ":id",

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
