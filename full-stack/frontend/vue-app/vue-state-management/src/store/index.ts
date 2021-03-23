import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      { name: 'Banana Skin', price: 20},
      { name: 'Shiny Star', price: 40},
      { name: 'Green Shells', price: 60},
      { name: 'Red Shells', price: 80}
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
});
