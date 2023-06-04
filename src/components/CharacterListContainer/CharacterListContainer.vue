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
};
</script>

<template>
  <UpperPanel />

  <div class="characterListContainer">
    <RandomCharacter />
    <div class="characterListContainer__mainWraper">
      <CharacterList />
      <div class="characterListContainer__subWraper">
        <CharacterInfo />
        <SearchForm />
      </div>
    </div>
    <img class="vision" src="../../resources/img/bg/vision.png" alt="" />
  </div>
</template>