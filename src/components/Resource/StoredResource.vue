<template>
  <ul>
    <ResourceItem
      v-for="res in resources"
      :id="res.id"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    />
  </ul>
</template>

<script>
import ResourceItem from './ResourceItem';

  export default {
    inject: ['resources'],
    components: {
      ResourceItem
    }
  }
</script>

<style scoped>

</style>