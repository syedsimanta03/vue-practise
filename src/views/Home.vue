<template>
  <div class="home">
    <TheButton @click.prevent="clicked">
      Click me &rarr;
    </TheButton>
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
