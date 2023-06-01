<script>
import UpperPanel from "../UpperPanel/UpperPanel.vue";
import RandomCharacter from "../RandomCharacter/RandomCharacter.vue";
import CharacterList from "../CharacterList/CharacterList.vue";
import CharacterInfo from "../CharacterInfo/CharacterInfo.vue";
import SearchForm from "../SearchForm/SearchForm.vue";
import ComicsList from "../ComicsList/ComicsList.vue";
import "./app.scss";
import "../../resources/fonts/fonts.scss";

export default {
  components: {
    UpperPanel,
    RandomCharacter,
    CharacterList,
    CharacterInfo,
    SearchForm,
    ComicsList,
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
  <div class="container">
    <UpperPanel />
    <!-- <RandomCharacter />
    <div class="mainWraper">
      <CharacterList @choseCharacter="choseCharacter" />
      <div class="subWraper">
        <CharacterInfo :chosenCharacter="chosenCharacter" />
        <SearchForm :toSaveTheFoundHero="toSaveTheFoundHero" />
      </div>
    </div> -->
    <ComicsList />
  </div>
</template>