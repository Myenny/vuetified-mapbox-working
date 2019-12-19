import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
// import firebase from 'firebase'
import { domain, clientId } from "../auth_config.json";
import { Auth0Plugin } from "./auth";

Vue.config.productionTip = false

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

