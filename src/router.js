import { createRouter, createWebHashHistory } from "vue-router";
import CharacterListContainer from "./components/CharacterListContainer/CharacterListContainer.vue";
import ComicsList from "./components/ComicsList/ComicsList.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/characters', component: CharacterListContainer, alias: '/' },
    { path: '/comics', component: ComicsList }
  ]
});