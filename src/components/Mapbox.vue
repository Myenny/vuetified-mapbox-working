<template>
  <div>
    <mapbox
      access-token="pk.eyJ1Ijoib29leWdvb2V5IiwiYSI6ImNrM2FtYXN1aTBhMnAzbW8xdncyZzh3cmUifQ.IRzWb-nPJVbVNiw1LamD1w"
      :map-options="{
        style: 'mapbox://styles/ooeygooey/ck3gd9myv00nd1ckb6sgvh3d6',
        center: [-96, 37.8],
        zoom: 3,
      }"
    />
  </div>
</template>

<script>
import Mapbox from "mapbox-gl-vue";
export default {
  components: { Mapbox }
};
</script>

<style>
#map {
  width: 100%;
  height: 500px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>