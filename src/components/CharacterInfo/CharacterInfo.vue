<script>
import "../../buttons/buttons.scss";
import "./characterInfo.scss";
export default {
  name: "CharacterInfo",
  props: ["chosenCharacter"],
  data() {
    return {};
  },
  methods: {
    // log: function () {
    //   console.log(this.chosenCharacter);
    //   // ['id', 'name', 'descr', 'image', 'comics', 'homepage', 'wiki', 'isActive']
    // },
  },
};
</script>

<template>
  <div
    class="characterInfo"
    v-if="Object.keys(this.chosenCharacter).length !== 0"
  >
    <div class="characterInfo__wraper">
      <div class="characterInfo__image">
        <img :src="this.chosenCharacter.image" alt="image" />
      </div>

      <div class="characterInfo__subWraper">
        <h2>{{ this.chosenCharacter.name }}</h2>
        <div class="characterInfo__buttons">
          <button class="buttons red">
            homepage
            <a :href="this.chosenCharacter.homepage"></a>
          </button>
          <button class="buttons gray">
            wiki
            <a :href="this.chosenCharacter.wiki"></a>
          </button>
        </div>
      </div>
    </div>
    <p class="characterInfo__descr">{{ this.chosenCharacter.descr }}</p>
    <h3>Comics:</h3>
    <ul>
      <li
        v-for="(comic, index) in this.chosenCharacter.comics.slice(0, 10)"
        :key="index"
      >
        {{ comic.name }}
      </li>
    </ul>
    <!-- <button @click="log">Log</button> -->
  </div>
</template>