import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import "./assets/haffer/stylesheet.css";
import "./assets/haffer2/stylesheet.css";
import "./assets/reg/stylesheet.css";
import "./assets/mono/stylesheet.css";
import "./assets/manrope.css";
import "vue-fullpage.js/dist/style.css";
import "./fullpage.dragAndMove.min";
import "./fullpage.scrollHorizontally.min";
import VueFullPage from "vue-fullpage.js";
import VueCountdown from "@chenfengyuan/vue-countdown";
createApp(App)
  .use(store)
  .use(router)
  .use(VueFullPage)
  .component(VueCountdown.name, VueCountdown)
  .mount("#app");
