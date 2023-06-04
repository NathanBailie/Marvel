import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      chosenCharacter: {},
      foundHero: {},
    }
  },
  mutations: {
    choseCharacter(state, payload) {
      state.chosenCharacter = payload;
    },
    toSaveTheFoundHero(state, payload) {
      state.foundHero = payload;
    },
  }
})

export default store;