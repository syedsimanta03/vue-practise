import { createApp } from 'vue';

import App from './App.vue';
//import store from './store'
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      counter: 0,
    }
  },
  /* how you want to modify state above */
  //@params state, payload
  mutations: {
    increment(state) {
      state.counter = state.counter + 2
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value
    },
  },
  /* async for api+setTimeout* -> to modify mutations*/
  //@params context, payload
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit('increment')
      }, 2000)
    },
    increase(context, payload) {
      context.commit('increase', payload)
    },
  },
  /* sync for logic -> mapGetters & show on uI */
  // @params state, getters
  getters: {
    finalCounter(state) {
      return state.counter * 2
    },
    normalizedCounter(_, getters) {
      const counter = getters.finalCounter
      if (counter < 0) return 0
      if (counter > 100) return 100
      return counter
    },
  },
})

const app = createApp(App);
  app.use(store);
  app.mount('#app');
