<template>
  <router-link to="/about">
  <button class="btn" :class="{'btn-primary': primary, 'btn-danger': danger}">Sign in</button>
  </router-link>
</template>

<script>
export default {
  props: {
    primary: {
      type: Boolean,
      default: true
    },
    danger: {
      type: Boolean,
      default: false
    },
  },
}
</script>