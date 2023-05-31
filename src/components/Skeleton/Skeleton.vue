<script>
import "./skeleton.scss";
export default {
  name: "Skeleton",
};
</script>

<template>
  <div class="skeleton">
    <h2>Please select a character to see information</h2>
    <div class="skeleton__firstLine">
      <div class="skeleton__circle"></div>
      <div class="skeleton__streak"></div>
    </div>
    <div class="skeleton__line"></div>
    <div class="skeleton__line"></div>
    <div class="skeleton__line"></div>
  </div>
</template>