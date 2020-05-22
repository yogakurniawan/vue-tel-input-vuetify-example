import Vue from "vue";
import VueTelInputVuetify from "vue-tel-input-vuetify";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

Vue.use(VueTelInputVuetify, {
  vuetify,
});

export default Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
