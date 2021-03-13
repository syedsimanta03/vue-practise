<template>
  <input :type="type" :name="name" :id="name" class="form-control" />
</template>


<script>
export default {
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
}
</script>