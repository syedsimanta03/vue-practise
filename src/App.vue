<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <fav-counter></fav-counter>
        <button @click="addOne">Add 10</button>
  </base-container>
    <base-container title="Auth">
      <user-auth></user-auth>
    </base-container>
</template>

<script>
import TheCounter from './components/TheCounter.vue'
import BaseContainer from './components/BaseContainer'
import FavCounter from './components/FavCounter.vue'
import UserAuth from './components/UserAuth.vue'

export default {
  components: {
    BaseContainer,
    TheCounter,
    FavCounter,
    UserAuth,
  },

  methods: {
        addOne() {
      this.$store.dispatch('increase', {value: 10})
      /* this.$store.dispatch({
        type: 'increase',
        value: 10
      }) */
    },


  },
  
    computed: {
      isAuth() {
        return this.$store.getters.userIsAuthenticated 
      }
    },
}
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
</style>
