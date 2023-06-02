<script>
import "../../resources/fonts/fonts.scss";
import "./app.scss";
import UpperPanel from "../UpperPanel/UpperPanel.vue";
import CharacterListContainer from "../CharacterListContainer/CharacterListContainer.vue";
import ComicsList from "../ComicsList/ComicsList.vue";

export default {
  components: {
    UpperPanel,
    CharacterListContainer,
    ComicsList,
  },
};
</script>

<template>
  <div class="container">
    <UpperPanel />
    <CharacterListContainer />
    <!-- <ComicsList /> -->
  </div>
</template>