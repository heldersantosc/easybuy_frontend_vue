import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "../style/styles.scss";

Vue.config.productionTip = false;

//importanto o Vue Router
import VueRouter from "vue-router";
//importando as rotas
import { routes } from "./routes";

//informando que alguns recursos estarão disponiveis para os componentes
Vue.use(VueRouter);
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

const router = new VueRouter({ routes, mode: "history" });

new Vue({
  el: "#app", //componente no html onde será renderizado
  router,
  render: h => h(App) //elemento que será renderizado
});
