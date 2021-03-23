<template>
  <the-header title="The header"></the-header>
  <the-resources></the-resources>
</template>

<script>
import TheResources from './components/Resource/TheResources'
import TheHeader from './components/layouts/TheHeader'
export default {
  components: {
    TheHeader,
    TheResources,
  },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
ul {
list-style: none;
}
</style>