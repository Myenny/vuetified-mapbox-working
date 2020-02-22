import Vue from 'vue'
import './plugins/vuetify'
import VueApollo from 'vue-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './App.vue'
import router from './router'
// import firebase from 'firebase'
import { domain, clientId } from "../auth_config.json";
import { Auth0Plugin } from "./auth";
import VueQrcodeReader from "vue-qrcode-reader";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://192.168.1.210:5050/query',
});
// const httpLink = createHttpLink({
//   // You should use an absolute URL here
//   uri: 'https://api.spacex.land/graphql/',
// });

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.use(VueApollo);


Vue.use(VueQrcodeReader);

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
  apolloProvider,
  render: h => h(App)
}).$mount("#app");


