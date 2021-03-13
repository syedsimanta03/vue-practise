<template>
  <div class="home">
   <AppInput name="email" type="password"/>
  </div>
</template>

<script>
import AppInput from '../components/AppInput'

export default {
  name: 'Home',
  components: {
    AppInput,
  },

}
</script>
