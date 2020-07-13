import Vue from "vue";
import VueTelInputVuetify from 'vue-tel-input-vuetify/lib';
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

export default Vue.config.productionTip = false;

Vue.use(VueTelInputVuetify, {
  vuetify,
});

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
