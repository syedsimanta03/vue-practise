/* async for api+setTimeout* -> to modify mutations*/
//@params context, payload
export default {
  increment(context) {
    setTimeout(() => {
      context.commit('increment')
    }, 2000)
  },
  increase(context, payload) {
    context.commit('increase', payload)
  },
}
