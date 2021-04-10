<template>
  <header>Expenses tracker</header>
  <section>
    <div>Available funds: {{ availableFunds }}</div>
    <div>Total Expenses: {{ currentExpenses }}</div>
    <hr />
    <div>Funds left: {{ remainingFunds }}</div>
  </section>
  <section>
    <form @submit.prevent="addExpenses">
      <div>
        <label for="amount">Amount</label>
        <input type="number" id="amount" v-model.number="enteredExpenses" />
      </div>
      <button>Add Expenses</button>
    </form>
  </section>
</template>

<script>
import { reactive, toRefs, computed, watch } from 'vue'

export default {
  setup() {
    const availableFunds = 100

    const state = reactive({
      currentExpenses: 0,
      enteredExpenses: 0,
    })

    const remainingFunds = computed(() => {
      return availableFunds - state.currentExpenses
    })

    const addExpenses = () => {
      state.currentExpenses = state.currentExpenses + state.enteredExpenses
    }
// arrow fun kaz kore na
    watch(remainingFunds, function(newValue) {
      if (newValue < 0) {
        alert('You are broke')
      }
    })

    return {
      availableFunds,
      ...toRefs(state),
      addExpenses,
      remainingFunds,
    }
  },
}
</script>

<style lang="scss" scoped></style>
