import Vue from "vue";
import App from "./App.vue";

import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
import "./element-variables.scss";
import store from "@/store";
import VueRouter from "vue-router";
import router from "@/router";
import "default-passive-events";
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
