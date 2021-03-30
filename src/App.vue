<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <fav-counter></fav-counter>
    <button @click="increment">Add 10</button>
    <button @click="increase({ value: 12 })">Add 12</button>
  </base-container>
</template>

<script>
import TheCounter from './components/TheCounter.vue'
import BaseContainer from './components/BaseContainer'
import FavCounter from './components/FavCounter.vue'
import { mapActions } from 'vuex'
export default {
  components: {
    BaseContainer,
    TheCounter,
    FavCounter,
  },

  methods: {
    /*     addOne() {
      //this.$store.commit('increase', {value: 10})
      this.$store.dispatch({
        type: 'increase',
        value: 10
      })
    } */

    ...mapActions(['increment', 'increase']),
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
