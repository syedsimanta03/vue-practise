<template>
  <div class="home">
   <AppInput name="password" type="password" v-model="form.email"/>
  </div>
</template>

<script>
import AppInput from '../components/AppInput'

export default {
  name: 'Home',
  components: {
    AppInput,
  },

  data() {
    return {
      form: {
        email: ''
      }
    }
  },

}
</script>
