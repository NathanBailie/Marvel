import { createRouter, createWebHashHistory } from "vue-router";
import CharacterListContainer from "./components/CharacterListContainer/CharacterListContainer.vue";
import ComicsList from "./components/ComicsList/ComicsList.vue";
import OneHeroPage from "./components/OneHeroPage/OneHeroPage.vue";
import OneComicBookPage from "./components/OneComicBookPage/OneComicBookPage.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/characters', component: CharacterListContainer, alias: '/' },
    { path: '/comics', component: ComicsList },
    { path: '/hero', component: OneHeroPage },
    { path: '/comic', component: OneComicBookPage },
  ]
});