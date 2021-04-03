import { createStore } from 'vuex'
import productsModule from './modules/products.js'
import cartModule from './modules/cart'

const store = createStore({
  state() {
    return {
      isLoggedIn: false,
    }
  },
  //@params: state, payload
  //modify state
  mutations: {
    login(state) {
      state.isLoggedIn = true
    },
    logout(state) {
      state.isLoggedIn = false
    },
  },

  //@params: context, payload
  //components uses specific action -> to send data as a payload to add into mutation param -> to change .state
  actions: {
    login(context) {
      context.commit('login') //commit('mutationName')
    },
    logout(context) {
      context.commit('logout') //commit('mutationName')
    },
  },
  //@params: state, getters
  //modify state
  //  getters pulls current state
  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn
    },
  },

  modules: { productsModule, cartModule },
})

export default store
