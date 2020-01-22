<template>
  <div class="profile">
    <v-container>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-text>
              <v-layout row justify-center>
                <v-avatar size="180" class="avatar">
                  <img :src="$auth.user.picture" class="userAvatar" />
                </v-avatar>
                <v-layout column justify-center>
                  <h2>{{ $auth.user.name }}</h2>
                  <!-- <v-spacer></v-spacer> -->
                  <router-link to="/settings">
                    <v-btn color="primary">Edit Profile</v-btn>
                  </router-link>
                </v-layout>
              </v-layout>

              <v-layout column justify-center>
                <!-- <h3>{{ $auth.user.email }}</h3> -->
                <v-layout row justify-center>
                  <div class="d-inline pa-2 accent-4 black--text">
                    <img src="@/assets/rainbowpoop.jpg" alt="poop" height="15" width="15" />
                    1,000,000 Tokens
                  </div>
                  <v-spacer></v-spacer>
                  <div class="d-inline pa-2 accent-4 black--text">55 Places</div>
                  <v-spacer></v-spacer>
                  <div class="d-inline pa-2 accent-4 black--text">100 Following</div>
                </v-layout>
              </v-layout>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="followUser()">Follow</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<!-- <template>
  <div>
    <div>
      <v-layout row justify-left>
        <v-avatar size="180" class="avatar">
          <img :src="$auth.user.picture" class="userAvatar" />
        </v-avatar>
        <v-layout row justify-center>
          <h2>{{ $auth.user.name }}</h2>
          <p>{{ $auth.user.email }}</p>
        </v-layout>
      </v-layout>
    </div>

<div>
      <pre>{{ JSON.stringify($auth.user, null, 2) }}</pre>
    </div>
  </div>
</template>-->

<script>
export default {
  data() {
    return {
      tokens: "",
      places: "",
      following: ""
    };
  },

  methods: {}
};
</script>
<style>
input[type="file"] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
}

.avatar {
  border: 1px solid white;
  background-color: black;
}

.userAvatar {
  transition: opacity 0.2s ease-in-out;
}

.userAvatar:hover {
  opacity: 0.5;
  filter: alpha(opacity=50);
  cursor: pointer;
}
</style>