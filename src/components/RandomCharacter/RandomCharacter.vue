<script>
import "./randomCharacter.scss";
import "../../buttons/buttons.scss";
import MarvelService from "../../services/MarvelService";
import Spinner from "../Spinner/Spinner.vue";
import Error from "../Error/Error.vue";

export default {
  name: "RandomCharacter",
  data() {
    return {
      loading: true,
      error: false,
      showContent: false,
      char: {},
      objectFit: "cover",
    };
  },
  components: {
    Spinner,
    Error,
  },

  methods: {
    getData() {
      new MarvelService()
        .getRandomChar()
        .then((res) => {
          this.char = res;
          this.objectFit = /not_available/.test(this.char.image)
            ? "contain"
            : "cover";
          this.loading = false;
          this.error = false;
          this.showContent = true;
        })
        .catch(() => {
          this.loading = false;
          this.showContent = false;
          this.error = true;
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<template>
  <div class="wraper">
    <div class="rndChar" v-if="showContent">
      <div class="rndChar__img">
        <img
          :src="this.char.image"
          alt="image"
          :style="{ objectFit: objectFit }"
        />
      </div>
      <div class="rndChar__info">
        <h2>{{ this.char.name }}</h2>
        <p>
          {{ this.char.descr }}
        </p>
        <div class="rndChar__buttons">
          <button class="buttons red">
            homepage
            <a :href="this.char.homepage"></a>
          </button>
          <button class="buttons gray">
            wiki
            <a :href="this.char.wiki"></a>
          </button>
        </div>
      </div>
    </div>

    <div class="launcher" v-if="showContent">
      <p>Random character for today!</p>
      <p>Do you want to get to know him better?</p>
      <p>Or choose another one</p>
      <button class="buttons red" @click="getData">try it</button>
      <img src="../../resources/img/bg/decor.png" alt="decor" />
    </div>

    <Spinner v-if="loading" />
    <Error v-if="error" />
  </div>
</template>