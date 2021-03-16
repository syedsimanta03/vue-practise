<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName"/>
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="enteredPhone"/>
    </div>
    <div>
      <label>Email</label>
      <input type="email" v-model="enteredEmail"/>
    </div>
    <div>
    <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Newfriend',
  emits: ['add-contact'],

  data() {
    return {
      enteredName: '',
      enteredPhone: '',
      enteredEmail: ''
    }
  },

  methods: {
    submitData() {
      this.$emit(
      'add-contact',
      this.enteredName,
      this.enteredPhone,
      this.enteredEmail
      )
    }
  },
}
</script>

<style lang="scss" scoped></style>
