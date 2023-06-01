<script>
import UpperPanel from "../UpperPanel/UpperPanel.vue";
import RandomCharacter from "../RandomCharacter/RandomCharacter.vue";
import CharacterList from "../CharacterList/CharacterList.vue";
import CharacterInfo from "../CharacterInfo/CharacterInfo.vue";
import SearchForm from "../SearchForm/SearchForm.vue";
import "./app.scss";
import "../../resources/fonts/fonts.scss";

export default {
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
      console.log(char);
    },
  },
};
</script>

<template>
  <div class="container">
    <UpperPanel />
    <RandomCharacter />
    <div class="mainWraper">
      <CharacterList @choseCharacter="choseCharacter" />
      <div class="subWraper">
        <CharacterInfo :chosenCharacter="chosenCharacter" />
        <SearchForm :toSaveTheFoundHero="toSaveTheFoundHero" />
      </div>
    </div>
  </div>
</template>