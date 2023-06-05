import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      chosenCharacter: {},
      foundHero: {},
      chosenComicBook: {},
      comics: [],
      comicsOffset: 0,
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
    toDownLoadComics(state, payload) {
      state.comics = payload;
    },
    toMakeComicsOffset(state) {
      state.comicsOffset += state.comics.length;
    },
    toPushAdditionalComics(state, payload) {
      state.comics = [...state.comics, ...payload];
    }
  }
})

export default store;