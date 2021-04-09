export default {
  state() {
    return {
      items: [],
      total: 0,
      qty: 0,
    }
  },
  //@params: state, payload
  //modify state
  mutations: {
    addProductToCart(state, payload) {
      const productData = payload
      const productInCartIndex = state.items.findIndex(
        (ci) => ci.productId === productData.id
      )

      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].qty++
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1,
        }
        state.items.push(newItem)
      }
      state.qty++
      state.total += productData.price
    },
    removeProductFromCart(state, payload) {
      const prodId = payload.productId
      const productInCartIndex = state.items.findIndex(
        (cartItem) => cartItem.productId === prodId
      )
      const prodData = state.items[productInCartIndex]
      state.items.splice(productInCartIndex, 1)
      state.qty -= prodData.qty
      state.total -= prodData.price * prodData.qty
    },
  },
  //@params: context, payload
  //components uses specific action -> to send data as a payload to add into mutation param -> to change .state
  actions: {
    addToCart(context, payload) {
      const prodId = payload.id
      console.log(context)
      //using rootGetters as products here belogs to product module which is another module
      const products = context.rootGetters.products
      const product = products.find((prod) => prod.id === prodId)
      context.commit('addProductToCart', product)
    },
    removeFromCart(context, payload) {
      context.commit('removeProductFromCart', payload)
    },
  },
  //@params: state, getters
  //modify state
  //  getters pulls current state
  getters: {
    productsCart(state) {
      return state.items
    },
    totalSum(state) {
      return state.total
    },
    quantity(state) {
      return state.qty
    },
  },
}
