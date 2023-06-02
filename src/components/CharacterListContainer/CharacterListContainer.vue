<script>
import "./characterListContainer.scss";
import RandomCharacter from "../RandomCharacter/RandomCharacter.vue";
import CharacterList from "../CharacterList/CharacterList.vue";
import CharacterInfo from "../CharacterInfo/CharacterInfo.vue";
import SearchForm from "../SearchForm/SearchForm.vue";

export default {
  name: "CharacterListContainer",
  components: {
    RandomCharacter,
    CharacterList,
    CharacterInfo,
    SearchForm,
  },
  data() {
    return {
      chosenCharacter: {},
      foundHero: {},
    };
  },
  methods: {
    choseCharacter: function (char) {
      this.chosenCharacter = char;
    },
    toSaveTheFoundHero: function (char) {
      this.foundHero = char;
    },
  },
};
</script>

<template>
  <div class="characterListContainer">
    <RandomCharacter />
    <div class="characterListContainer__mainWraper">
      <CharacterList @choseCharacter="choseCharacter" />
      <div class="characterListContainer__subWraper">
        <CharacterInfo :chosenCharacter="chosenCharacter" />
        <SearchForm :toSaveTheFoundHero="toSaveTheFoundHero" />
      </div>
    </div>
  </div>
</template>