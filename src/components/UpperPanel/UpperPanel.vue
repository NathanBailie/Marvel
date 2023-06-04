<script>
import "./upperPanel.scss";

export default {
  name: "UpperPanel",
  components: {},
  data() {
    return {
      activeLink: "",
    };
  },
  methods: {
    changeToCharacters() {
      this.activeLink = "characters";
    },
    changeToComics() {
      this.activeLink = "comics";
    },
  },
  mounted() {
    const path = this.$router.options.history.location.slice(1);
    if (path === "") {
      this.activeLink = "characters";
      return;
    }
    this.activeLink = path;
  },
};
</script>

<template>
  <div class="upperPanel">
    <h1 class="upperPanel__title">
      <span class="marked">Marvel</span> information portal
    </h1>
    <div class="upperPanel__links">
      <h2>
        <a
          href="#/characters"
          :class="this.activeLink === 'characters' ? 'marked' : ''"
          @click="changeToCharacters"
          >Characters</a
        >
      </h2>
      <h2>&nbsp;/&nbsp;</h2>
      <h2 @click="changeActiveLink">
        <a
          href="#/comics"
          :class="this.activeLink === 'comics' ? 'marked' : ''"
          @click="changeToComics"
          >Comics</a
        >
      </h2>
    </div>
  </div>
</template>