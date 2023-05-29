<script>
import UpperPanel from "../UpperPanel/UpperPanel.vue";
import RandomCharacter from "../RandomCharacter/RandomCharacter.vue";
import "./app.scss";
import "../../resources/fonts/fonts.scss";

export default {
  components: {
    UpperPanel,
    RandomCharacter,
  },
  methods: {},
};
</script>

<template>
  <div class="container">
    <UpperPanel />
    <RandomCharacter />
  </div>
</template>