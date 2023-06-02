<script>
import "../../resources/fonts/fonts.scss";
import "./app.scss";
import CharacterListContainer from "../CharacterListContainer/CharacterListContainer.vue";
import ComicsList from "../ComicsList/ComicsList.vue";

export default {
  components: {
    CharacterListContainer,
    ComicsList,
  },
};
</script>

<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>