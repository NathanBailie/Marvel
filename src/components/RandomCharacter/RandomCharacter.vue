<script>
import "./randomCharacter.scss";
import "../../buttons/buttons.scss";
import MarvelService from "../MarvelService/MarvelService";

export default {
  name: "RandomCharacter",
  loading: true,
  error: false,
  char: {},
  methods: {
    getData: () => {
      new MarvelService().getRandomChar().then((res) => {
        this.char = res;
      });
    },
  },
};
</script>

<template>
  <div class="wraper">
    <div class="rndChar">
      <div class="rndChar__img"></div>
      <div class="rndChar__info">
        <h2>{{ this.char.name }}</h2>
        <p>
          {{ this.char.descr }}
        </p>
        <div class="rndChar__buttons">
          <button class="buttons red">homepage</button>
          <button class="buttons gray">wiki</button>
        </div>
      </div>
    </div>

    <div class="launcher">
      <p>Random character for today!</p>
      <p>Do you want to get to know him better?</p>
      <p>Or choose another one</p>
      <button class="buttons red" @click="getData">try it</button>
      <img src="../../resources/img/bg/decor.png" alt="decor" />
    </div>
  </div>
</template>