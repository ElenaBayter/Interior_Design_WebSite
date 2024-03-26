import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import VueMarqueeSlider from "vue-marquee-slider";

Vue.config.productionTip = false;
Vue.use(VueMarqueeSlider);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
