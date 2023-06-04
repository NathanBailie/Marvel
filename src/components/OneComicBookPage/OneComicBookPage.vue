<script>
import "./oneComicBookPage.scss";
import UpperPanel from "../UpperPanel/UpperPanel.vue";
import AnnouncementLine from "../AnnouncementLine/AnnouncementLine.vue";
import store from "../../store";

export default {
  name: "OneComicBookPage",
  components: {
    AnnouncementLine,
    UpperPanel,
  },
};
</script>

<template>
  <UpperPanel />
  <AnnouncementLine />

  <div class="oneComicBookPage">
    <img :src="$store.state.chosenComicBook.image" alt="comicBook" />
    <div class="oneHeroPage__info">
      <h2>{{ $store.state.chosenComicBook.title }}</h2>
      <p>{{ $store.state.chosenComicBook.descr }}</p>
      <p>{{ $store.state.chosenComicBook.pages }} pages</p>
    </div>
  </div>
</template>


