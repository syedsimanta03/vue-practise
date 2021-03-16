<template>
  <li>
    <p v-if="isfav" >Favourite</p>
    <h2>{{ name }}</h2>
    <button @click="togglefav">
      Togglefav
    </button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneX }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  name: 'FriendContact',
  props:  ['name', 'phoneX', 'email', 'isfav', 'id'],
  emits: ['toggle-fav', 'delete'],
 data() {
   return {
     detailsAreVisible: false
   }
 },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    },
    togglefav() {
      this.$emit('toggle-fav', this.id)
    }
    
  },
}
</script>
