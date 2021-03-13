<template>
<div>
  <input :type="inputType" :name="name" :id="name" class="form-control" />
  <a href="#" v-if="type === 'password'" @click.prevent="passwordRevealed =! passwordRevealed">{{passwordRevealed? 'Hide' : 'Reveal'}} password</a>
</div>
</template>


<script>
export default {
/* state */
data() {
  return {
    passwordRevealed: false
  }
},

  props: {
    name: {
      type: String,
      require: true
    },
    type: {
      type: String,
      require: false,
      default: 'text'
    },
  },
/* shadow copy */
  computed: {
    inputType() {
      return this.passwordRevealed ? 'text' : this.type
    }
  },
/* mutate shadow copy to keep state immutable */
  methods: {
    togglevisibility() {
      this.inputType = this.inputType === 'password'? 'text' : 'password'
    }
  },

}
</script>