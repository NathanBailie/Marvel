<script>
import "../../buttons/buttons.scss";
import "./characterList.scss";
import MarvelService from "../MarvelService/MarvelService";
import Spinner from "../Spinner/Spinner.vue";
import Error from "../Error/Error.vue";

export default {
  name: "CharacterList",
  emits: ["choseCharacter"],
  data() {
    return {
      characters: [],
      offset: 0,
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
      this.offset += this.characters.length;

      new MarvelService()
        .getAllCharacters(this.offset)
        .then((res) => {
          this.characters = res;
          this.characters.map((elem) => (elem.isActive = false));
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
    toggleActive: function (id) {
      this.characters.map((elem) => {
        if (elem.id !== id) {
          elem.isActive = false;
        } else {
          elem.isActive = !elem.isActive;
        }
      });

      let activeChar = {};

      this.characters.forEach((elem) => {
        if (elem.isActive) {
          activeChar = elem;
        }
      });

      this.$emit("choseCharacter", activeChar);
    },
    toLoadAdditionalCharacters: function () {
      this.offset += this.characters.length;
      this.additionalLoading = true;

      new MarvelService()
        .getAllCharacters(this.offset)
        .then((res) => {
          this.characters.push(...res);
          this.additionalError = false;
          this.additionalLoading = false;
        })
        .catch(() => {
          this.additionalError = true;
          this.additionalLoading = false;
        });
    },
  },
  mounted() {
    this.getCharacters();
  },
};
</script>

<template>
  <div class="characterListWraper">
    <div class="characterList" v-if="showContent">
      <div
        v-for="char in characters"
        :key="char.id"
        :class="
          char.isActive
            ? 'characterList__char characterList__char_active'
            : 'characterList__char'
        "
        @click="toggleActive(char.id)"
      >
        <img :src="char.image" alt="character" />
        <h2>{{ char.name }}</h2>
      </div>
    </div>

    <Spinner v-if="startLoading" />
    <Error v-if="startError" />

    <button
      v-if="characters.length < 1562"
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