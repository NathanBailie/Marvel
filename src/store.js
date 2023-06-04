import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      chosenCharacter: {},
      foundHero: {},
      chosenComicBook: {}
    }
  },
  mutations: {
    choseCharacter(state, payload) {
      state.chosenCharacter = payload;
    },
    toSaveTheFoundHero(state, payload) {
      state.foundHero = payload;
    },
    toSaveTheChosenComicBook(state, payload) {
      state.chosenComicBook = payload;
    },
  }
})

export default store;