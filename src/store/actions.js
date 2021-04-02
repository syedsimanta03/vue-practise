/* async for api+setTimeout* -> to modify mutations*/
//@params context, payload
export default {
  login(context) {
    context.commit('setAuth', { isAuth: true })
  },
  logout(context) {
    context.commit('setAuth', { isAuth: false })
  },
}
