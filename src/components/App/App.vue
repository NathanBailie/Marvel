<script>
import UpperPanel from "../UpperPanel/UpperPanel.vue";
import RandomCharacter from "../RandomCharacter/RandomCharacter.vue";
import "./app.scss";
export default {
  components: {
    UpperPanel,
    RandomCharacter,
  },
};
</script>

<template>
  <div class="container">
    <UpperPanel />
    <RandomCharacter />
  </div>
</template>