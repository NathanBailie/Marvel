<script>
import UpperPanel from "../UpperPanel/UpperPanel.vue";
import RandomCharacter from "../RandomCharacter/RandomCharacter.vue";
import CharacterList from "../CharacterList/CharacterList.vue";
import CharacterInfo from "../CharacterInfo/CharacterInfo.vue";
import "./app.scss";
import "../../resources/fonts/fonts.scss";

export default {
  components: {
    UpperPanel,
    RandomCharacter,
    CharacterList,
    CharacterInfo,
  },
  data() {
    return {
      chosenCharacter: {},
    };
  },
  methods: {
    choseCharacter: function (char) {
      this.chosenCharacter = char;
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
      </div>
    </div>
  </div>
</template>