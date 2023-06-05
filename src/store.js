import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      chosenCharacter: {},
      foundHero: {},
      chosenComicBook: {},
      characters: [],
      charactersOffset: 0,
      comics: [],
      comicsOffset: 0,
    }
  },
  mutations: {
    toSaveTheFoundHero(state, payload) {
      state.foundHero = payload;
    },
    toSaveTheChosenComicBook(state, payload) {
      state.chosenComicBook = payload;
    },
    toDownloadCharacters(state, payload) {
      state.characters = payload;
    },
    toAddAnActiveParameter(state) {
      state.characters.map((elem) => (elem.isActive = false))
    },
    toMakeCharactersOffset(state) {
      state.charactersOffset += state.characters.length;
    },
    toPushAdditionalCharacters(state, payload) {
      state.characters = [...state.characters, ...payload];
    },
    toToggleAnActiveCharacter(state, payload) {
      state.characters.map((elem) => {
        if (elem.id !== payload) {
          elem.isActive = false;
        } else {
          elem.isActive = !elem.isActive;
        }
      });

      state.characters.forEach((elem) => {
        if (elem.isActive) {
          state.chosenCharacter = elem;
        }
      });

    },
    toDownloadComics(state, payload) {
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