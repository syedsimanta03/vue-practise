<template>
  <div class="home">
    <TheButton/>
    <TheButton theme="danger" size="large"/>
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
