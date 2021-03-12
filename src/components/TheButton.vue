<template>
  <router-link to="/about">
    <button
      class="btn"
      :class="[themes[theme], sizes[size]]"
    >
      <slot>{{text}}</slot>
    </button>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      themes: {
        primary: 'btn-primary',
        danger: 'btn-danger',
      },
      sizes: {
        normal: '',
        large: 'btn-lg',
      },

    }
  },
  props: {
    theme: {
      type: String,
      default: 'primary',
    },
    text: {
      type: String,
    },
    size: {
      type: String,
      default: 'normal',
    },
  },
}
</script>
