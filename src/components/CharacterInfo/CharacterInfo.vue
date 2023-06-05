<script>
import "../../buttons/buttons.scss";
import "./characterInfo.scss";
import Skeleton from "../Skeleton/Skeleton.vue";
import store from "../../store";

export default {
  name: "CharacterInfo",
  components: { Skeleton },
};
</script>

<template>
  <div
    class="characterInfo"
    v-if="Object.keys($store.state.chosenCharacter).length !== 0"
  >
    <div class="characterInfo__wraper">
      <div class="characterInfo__image">
        <img :src="$store.state.chosenCharacter.image" alt="image" />
      </div>

      <div class="characterInfo__subWraper">
        <h2>{{ $store.state.chosenCharacter.name }}</h2>
        <div class="characterInfo__buttons">
          <button class="buttons red">
            homepage
            <a :href="$store.state.chosenCharacter.homepage"></a>
          </button>
          <button class="buttons gray">
            wiki
            <a :href="$store.state.chosenCharacter.wiki"></a>
          </button>
        </div>
      </div>
    </div>
    <p class="characterInfo__descr">{{ $store.state.chosenCharacter.descr }}</p>
    <h3>Comics:</h3>
    <ul>
      <li
        v-for="(comic, index) in $store.state.chosenCharacter.comics.slice(
          0,
          10
        )"
        :key="index"
      >
        {{ comic.name }}
      </li>
    </ul>
  </div>
  <Skeleton v-if="Object.keys($store.state.chosenCharacter).length === 0" />
</template>