<script>
import "../../buttons/buttons.scss";
import "./characterList.scss";
import MarvelService from "../../services/MarvelService";
import Spinner from "../Spinner/Spinner.vue";
import Error from "../Error/Error.vue";
import store from "../../store";

export default {
  name: "CharacterList",
  data() {
    return {
      startLoading: true,
      startError: false,
      showContent: false,
      additionalLoading: false,
      additionalError: false,
    };
  },
  components: {
    Spinner,
    Error,
  },
  methods: {
    getCharacters() {
      new MarvelService()
        .getAllCharacters(store.state.charactersOffset)
        .then((res) => {
          store.commit("toDownloadCharacters", res);
          store.commit("toAddAnActiveParameter");
          store.commit("toMakeCharactersOffset");
          this.startLoading = false;
          this.startError = false;
          this.showContent = true;
        })
        .catch(() => {
          this.startLoading = false;
          this.showContent = false;
          this.startError = true;
        });
    },

    toLoadAdditionalCharacters: function () {
      this.additionalLoading = true;

      new MarvelService()
        .getAllCharacters(store.state.charactersOffset)
        .then((res) => {
          store.commit("toPushAdditionalCharacters", res);
          store.commit("toMakeCharactersOffset");
          this.additionalLoading = false;
          this.additionalError = false;
        })
        .catch(() => {
          this.additionalError = true;
          this.additionalLoading = false;
        });
    },
  },
  mounted() {
    if (store.state.characters.length === 0) {
      this.getCharacters();
    } else {
      this.startLoading = false;
      this.startError = false;
      this.showContent = true;
    }
  },
};
</script>

<template>
  <div class="characterListWraper">
    <div class="characterList" v-if="showContent">
      <div
        v-for="char in $store.state.characters"
        :key="char.id"
        :class="
          char.isActive
            ? 'characterList__char characterList__char_active'
            : 'characterList__char'
        "
        @click="$store.commit('toToggleAnActiveCharacter', char.id)"
      >
        <img :src="char.image" alt="character" />
        <h2>{{ char.name }}</h2>
      </div>
    </div>

    <Spinner v-if="startLoading" />
    <Error v-if="startError" />

    <button
      v-if="$store.state.characters.length < 1562"
      class="buttons red"
      @click="toLoadAdditionalCharacters"
    >
      {{ this.additionalLoading ? "Loading..." : null }}
      {{ this.additionalError ? "Reload" : null }}
      {{
        !this.additionalLoading && !this.additionalError ? "Load more" : null
      }}
    </button>
  </div>
</template>