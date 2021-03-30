import { createApp } from 'vue';

import App from './App.vue';
//import store from './store'
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      counter: 0
    }
  },

  mutations: {
    increment(state) {
      state.counter = state.counter + 2
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value
    }
  },

  getters: {
    finalCounter(state) {
      return state.counter * 2
    },
    normalizedCounter(_, getters) {
      const counter = getters.finalCounter
      if (counter < 0 ) return 0
      if (counter > 100 ) return 100
      return counter
    }
  }

})

const app = createApp(App);
  app.use(store);
  app.mount('#app');
