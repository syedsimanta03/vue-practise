import { createStore } from 'vuex'
import rootMutations from './mutations.js'
import rootActions from './actions.js'
import rootGetters from './getters.js'

import counterModule from './modules/counter/index.js'

const store = createStore({
  state() {
    return {
      isLoggedIn: false,
    }
  },

  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
  /* modules always should be object */
  modules: { counterModule }
})

export default store
