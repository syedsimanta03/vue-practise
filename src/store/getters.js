/* sync for logic -> mapGetters & show on uI */
// @params state, getters
export default {
  userIsAuthenticated(state) {
    return state.isLoggedIn
  },
}
