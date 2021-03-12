<template>
  <router-link to="/about">
    <button
      class="btn"
      :class="[themes[theme], sizes[size]]"
      :title="formatTitle"
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

  computed: {
    formatTitle() {
      return `? ${this.title}` 
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
    title: {
      type: String,
    },
    size: {
      type: String,
      default: 'normal',
    },
  },
}
</script>
