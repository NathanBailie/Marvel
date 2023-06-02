<script>
import "./characterListContainer.scss";
import UpperPanel from "../UpperPanel/UpperPanel.vue";
import RandomCharacter from "../RandomCharacter/RandomCharacter.vue";
import CharacterList from "../CharacterList/CharacterList.vue";
import CharacterInfo from "../CharacterInfo/CharacterInfo.vue";
import SearchForm from "../SearchForm/SearchForm.vue";

export default {
  name: "CharacterListContainer",
  components: {
    UpperPanel,
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
  <UpperPanel />

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