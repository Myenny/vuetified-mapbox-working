<template>
  <div>
    <!-- <ul "data of getUser" v-bind:key="data.id"> -->
      {{ getUser }}
    <!-- </ul> -->
  </div>
</template>
<script>
import gql from 'graphql-tag'

  export default {
    data () {
      return {
        getUser: "",
      }
    },
     apollo: { 
      getUser: {
        query: gql`query{
          getUser(id: 1) {
            name
              pets {
                id
                name
              }
           }
        }`,
     },
  }
  }
</script>
<style lang="scss" scoped>
</style>