<template>
  <div class="home">
    <TheButton/>
    <TheButton danger/>
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
