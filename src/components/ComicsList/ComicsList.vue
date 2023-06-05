<script>
import "../../buttons/buttons.scss";
import "./comicsList.scss";
import MarvelService from "../../services/MarvelService";
import UpperPanel from "../UpperPanel/UpperPanel.vue";
import Spinner from "../Spinner/Spinner.vue";
import Error from "../Error/Error.vue";
import AnnouncementLine from "../AnnouncementLine/AnnouncementLine.vue";
import store from "../../store";

export default {
  name: "ComicsList",
  components: {
    UpperPanel,
    Spinner,
    Error,
    AnnouncementLine,
  },

  data() {
    return {
      startLoading: true,
      startError: false,
      showContent: false,
      additionalLoading: false,
      additionalError: false,
    };
  },
  methods: {
    getComics() {
      new MarvelService()
        .getAllComics(store.state.offset)
        .then((res) => {
          store.commit("toDownloadComics", res);
          store.commit("toMakeComicsOffset");
          this.startLoading = false;
          this.startError = false;
          this.showContent = true;
        })
        .catch(() => {
          this.startLoading = false;
          this.showContent = false;
          this.startError = true;
        });
    },
    toLoadAdditionalComics: function () {
      this.additionalLoading = true;

      new MarvelService()
        .getAllComics(store.state.comicsOffset)
        .then((res) => {
          store.commit("toPushAdditionalComics", res);
          store.commit("toMakeComicsOffset");
          this.additionalLoading = false;
          this.additionalError = false;
        })
        .catch(() => {
          this.additionalError = true;
          this.additionalLoading = false;
        });
    },
    toSaveTheComicBook: function (res) {
      store.commit("toSaveTheChosenComicBook", res);
    },
  },
  mounted() {
    if (store.state.comics.length === 0) {
      this.getComics();
    } else {
      this.startLoading = false;
      this.startError = false;
      this.showContent = true;
    }
  },
};
</script>

<template>
  <UpperPanel />
  <AnnouncementLine />

  <div class="comicsList">
    <div class="comicsList__comics" v-if="showContent">
      <div
        v-for="comicBook in $store.state.comics"
        :key="comicBook.id"
        class="comicsList__comicBook"
        @click="toSaveTheComicBook(comicBook)"
      >
        <img :src="comicBook.image" alt="comicBook" />
        <a href="#/comic" />
        <h2>
          {{ comicBook.title }}
        </h2>
      </div>
    </div>

    <Spinner v-if="startLoading" />
    <Error v-if="startError" />

    <button
      class="buttons red"
      @click="toLoadAdditionalComics"
      v-if="$store.state.comics.length < 55763"
    >
      {{ this.additionalLoading ? "Loading..." : null }}
      {{ this.additionalError ? "Reload" : null }}
      {{
        !this.additionalLoading && !this.additionalError ? "Load more" : null
      }}
    </button>
  </div>
</template>