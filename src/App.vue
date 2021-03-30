<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <fav-counter></fav-counter>
    <button @click="addOne">Add 10</button>
  </base-container>
</template>

<script>
import TheCounter from './components/TheCounter.vue';
import BaseContainer from './components/BaseContainer';
import FavCounter from './components/FavCounter.vue';
export default {
  components: {
    BaseContainer,
    TheCounter,
    FavCounter
  },

  methods: {
    addOne() {
      //this.$store.commit('increase', {value: 10})
      this.$store.commit({
        type: 'increase',
        value: 10
      })
    }
  }
};
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