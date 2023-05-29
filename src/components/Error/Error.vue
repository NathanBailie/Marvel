<script>
import "./error.scss";
import deadpool from "../../resources/icons/deadpool.png";

export default {
  name: "Error",
  data() {
    return {
      errorImage: deadpool,
    };
  },
};
</script>

<template>
  <div class="error">
    <img :src="this.errorImage" alt="deadpool" />
    <p>Oops! Something went wrong! Reload you page please!</p>
  </div>
</template>