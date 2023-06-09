import { getRandomNum } from '../utils/utils';


export default class MarvelService {
  _apiKey = "apikey=0655a8a78f85794cf56ee69c7dcbff18";
  _apiBase = "https://gateway.marvel.com:443/v1/public/";


  getResource = async (url) => {
    try {
      const res = await fetch(url);
      if (res.code = '200') {
        return await res.json();
      } else {
        throw new Error(`Status code is ${res.code}`)
      };
    } catch (err) {
      throw new Error(`Error name: ${err.name}, error message: ${err.message}`);
    };
  };

  getRandomChar = async () => {
    const id = getRandomNum(1011000, 1011400);
    const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    return this._toConvertTheHeroData(res.data.results[0]);
  };

  getAllCharacters = async (offset) => {
    const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
    return res.data.results.map((elem) => this._toConvertTheHeroData(elem));
  };

  getCharacterByName = async (name) => {
    const res = await this.getResource(`${this._apiBase}characters?name=${name}&${this._apiKey}`);
    return this._toConvertTheHeroData(res.data.results[0]);
  };

  getAllComics = async (offset) => {
    const res = await this.getResource(`${this._apiBase}comics?limit=8&offset=${offset}&${this._apiKey}`);
    return res.data.results.map((elem) => this._toConvertTheComicsData(elem));
  };

  _toConvertTheHeroData = (data) => {
    return {
      id: data.id,
      name: data.name,
      descr: data.description === null || data.description.length === 0 ? 'There is no description for this character' : data.description,
      image: `${data.thumbnail.path}.${data.thumbnail.extension}`,
      comics: data.comics.items,
      homepage: data.urls[0].url,
      wiki: data.urls[1].url,
    };
  };

  _toConvertTheComicsData = (data) => {
    return {
      id: data.id,
      title: data.title,
      descr: data.description === null || data.description.length === 0 ? 'There is no description for this comic book' : data.description,
      pages: data.pageCount,
      image: `${data.thumbnail.path}.${data.thumbnail.extension}`,
      url: data.urls[0].url,
    };
  };
}