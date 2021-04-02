/* how you want to modify state above */
//@params state, payload
export default {
  setAuth(state, payload) {
    state.isLoggedIn = payload.isAuth
  },
}
