<template>
  <nav>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>Wow! You added a new project.</span>
      <v-btn flat color="white" @click="snackbar = false">Close</v-btn>
    </v-snackbar>

    <v-toolbar flat app>
      <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>

      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">idfk game :)</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Tokens: 1,000,000,000</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn flat color="grey" v-if="$auth.isAuthenticated" @click="logout">
        <span>Sign out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <!-- Drawer -->
    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-layout column align-center>
        <v-flex class="mt-5 text-xs-center">
          <v-avatar size="130">
            <img :src="$auth.user.picture" />
          </v-avatar>
          <p class="white--text subheading mt-1 text-xs-center">{{$auth.user.name}}</p>
        </v-flex>
        <v-flex class="mt-3 mb-3">
          <Popup @projectAdded="snackbar=true" />
        </v-flex>
      </v-layout>

      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>


<script>
import Popup from "./Popup";

export default {
  components: { Popup },
  data() {
    return {
      name: "",
      photoURL: "",
      drawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/dashboard" },
        { icon: "person", text: "Profile", route: "/profile" },
        { icon: "map", text: "Map", route: "/map" },
        { icon: "scanner", text: "QrScanner", route: "/qrscanner" },
        { icon: "place", text: "Places", route: "/places" },
        { icon: "event", text: "Events", route: "/events" },
        { icon: "settings", text: "Settings", route: "/settings" }
      ],
      snackbar: false
    };
  },
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    },
    signout() {
      this.$router.replace("/auth");
    }
  }

  // created() {
  //   if ($auth.user) {
  //     this.name = $auth.user.name;
  //     if (user.photoURL) {
  //       this.photoURL = $auth.user.picture;
  //     } else {
  //       this.photoURL = "https://imgur.com/dLB4u3s.png";
  //     }
  //   } else {

  //   }
  // }
};
</script>
