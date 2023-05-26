<script>
import "./randomCharacter.scss";
import "../../buttons/buttons.scss";
export default {
  name: "RandomCharacter",
};
</script>

<template>
  <div class="wraper">
    <div class="rndChar">
      <div class="rndChar__img"></div>
      <div class="rndChar__info">
        <h2>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
          delectus nihil cupiditate? Aperiam eligendi minus dolores natus! Sed
          iure sequi ex ab, deleniti odio perferendis earum nobis, incidunt
          praesentium dignissimos.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          rerum optio laboriosam eum cumque exercitationem! Impedit dolorem,
          minus provident quos ab nisi, dignissimos labore modi obcaecati
          voluptate, velit ullam fuga!
        </p>
        <div class="rndChar__buttons">
          <button class="buttons red">homepage</button>
          <button class="buttons gray">wiki</button>
        </div>
      </div>
    </div>

    <div class="launcher">
      <p>Random character for today!</p>
      <p>Do you want to get to know him better?</p>
      <p>Or choose another one</p>
      <button class="buttons red">try it</button>
      <img src="../../resources/img/bg/decor.png" alt="decor" />
    </div>
  </div>
</template>