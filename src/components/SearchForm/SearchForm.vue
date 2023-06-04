<script>
import "../../buttons/buttons.scss";
import "./searchForm.scss";
import MarvelService from "../MarvelService/MarvelService";
import store from "../../store";

export default {
  name: "SearchForm",

  data() {
    return {
      heroName: "",
      heroNameCopy: "",
      loading: false,
      responseReceived: false,
      emptyField: false,
      correct: false,
      wrong: false,
    };
  },
  methods: {
    toGetTheHero: function () {
      this.loading = true;
      this.responseReceived = false;
      this.emptyField = false;
      this.correct = false;
      this.wrong = false;

      if (this.heroName.length === 0) {
        this.loading = false;
        this.emptyField = true;
        return;
      }

      new MarvelService()
        .getCharacterByName(this.heroName)
        .then((res) => {
          store.commit("toSaveTheFoundHero", res);

          this.loading = false;
          this.responseReceived = true;
          this.correct = true;
          this.heroNameCopy = this.heroName;
        })
        .catch(() => {
          this.loading = false;
          this.wrong = true;
        });
    },
  },
};
</script>

<template>
  <div class="searchForm">
    <h2>Or find a character by name:</h2>
    <div class="searchForm__wraper">
      <input
        type="text"
        placeholder="Enter name"
        v-model="heroName"
        @keyup.enter="toGetTheHero"
      />
      <button class="buttons red" @click="toGetTheHero">
        {{ loading ? "loading..." : "find" }}
      </button>
    </div>
    <div class="searchForm__result">
      <p class="searchForm__wrong" v-if="emptyField">This field is required</p>
      <p class="searchForm__correct" v-if="correct">
        There is! Visit <span>{{ heroNameCopy.toUpperCase() }}</span> page?
      </p>
      <p class="searchForm__wrong" v-if="wrong">
        The character was not found. Check the name and try again
      </p>
      <button class="buttons gray" v-if="responseReceived">
        to page
        <a href="#/hero"></a>
      </button>
    </div>
  </div>
</template>