<template>
  <div class="home">
   <AppInput name="password" type="password"/>
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
