<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectCom('ActiveGoals')">Active Goals</button>
    <button @click="setSelectCom('ManageGoals')">Manage Goals</button>
    <keep-alive>
    <component :is="selectCom"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import ActiveGoals from './components/ActiveGoals.vue'
import ManageGoals from './components/ManageGoals.vue'

export default {
  components: {
    TheHeader,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectCom: 'ActiveGoals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    }
  },

  methods: {
    setSelectCom(cmp) {
      this.selectCom = cmp
    },
  },
}
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
