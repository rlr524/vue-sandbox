import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.filter("toLowercase", function(value) {
  return value.toLowerCase();
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
