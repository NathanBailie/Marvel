<script>
import "./oneHeroPage.scss";
import UpperPanel from "../UpperPanel/UpperPanel.vue";
import AnnouncementLine from "../AnnouncementLine/AnnouncementLine.vue";
import store from "../../store";

export default {
  name: "OneHeroPage",
  components: {
    AnnouncementLine,
    UpperPanel,
  },
};
</script>

<template>
  <UpperPanel />
  <AnnouncementLine />
  <div class="oneHeroPage">
    <img :src="$store.state.foundHero.image" alt="hero" />
    <div class="oneHeroPage__info">
      <h2>{{ $store.state.foundHero.name }}</h2>
      <p>{{ $store.state.foundHero.descr }}</p>
      <p>{{ $store.state.foundHero.descr }}</p>
    </div>
  </div>
</template>