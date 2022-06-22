import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import "vue-fullpage.js/dist/style.css";
import VueFullPage from "vue-fullpage.js";

createApp(App).use(store).use(router).use(VueFullPage).mount("#app");
