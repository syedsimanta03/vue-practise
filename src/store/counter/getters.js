/* sync for logic -> mapGetters & show on uI */
// @params state, getters
export default {
  finalCounter(state) {
    return state.counter * 2
  },
  normalizedCounter(_, getters) {
    const counter = getters.finalCounter
    if (counter < 0) return 0
    if (counter > 100) return 100
    return counter
  }
}
