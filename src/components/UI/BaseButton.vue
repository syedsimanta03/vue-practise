<template>
  <button 
  :class="[ mode === 'flat' ? 'flat' : 'btn']"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['mode'],
}
</script>

<style scoped>

.btn {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
}

.btn:hover,
.btn:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: none;
  color: #3a0061;
  border: none;
  padding: 10px 15px;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>
