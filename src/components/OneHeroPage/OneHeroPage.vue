<script>
import "./oneHeroPage.scss";
import AnnouncementLine from "../AnnouncementLine/AnnouncementLine.vue";
import store from "../../store";

export default {
  name: "OneHeroPage",
  components: {
    AnnouncementLine,
  },
  methods: {},
};
</script>

<template>
  <AnnouncementLine />
  <div class="oneHeroPage"></div>
</template>