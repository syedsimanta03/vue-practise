<template>
  <div class="home">
    <TheButton text="Click me &rarr;" title="title here"/>
  </div>
</template>

<script>
import TheButton from '../components/TheButton'

export default {
  name: 'Home',
  components: {
    TheButton,
  },

}
</script>
