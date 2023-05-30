<script>
import UpperPanel from "../UpperPanel/UpperPanel.vue";
import RandomCharacter from "../RandomCharacter/RandomCharacter.vue";
import CharacterList from "../CharacterList/CharacterList.vue";
import "./app.scss";
import "../../resources/fonts/fonts.scss";

export default {
  components: {
    UpperPanel,
    RandomCharacter,
    CharacterList,
  },
};
</script>

<template>
  <div class="container">
    <UpperPanel />
    <RandomCharacter />
    <CharacterList />
  </div>
</template>