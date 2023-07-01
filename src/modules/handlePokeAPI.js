import { getPokemonComment, getPokemonLikeId, postPokemonComment } from './crudInvolvementAPI.js';
import getPokemon from './crudPokeAPI.js';
import counterModule from './counterComm.js';

export const addPokeImg = () => {
  const pokeImg = document.querySelectorAll('.img');

  pokeImg.forEach(async (item) => {
    const { id } = item.parentElement.parentElement;
    const pokeData = await getPokemon(id);
    const pokeImg = pokeData.data.sprites.versions['generation-v']['black-white'].animated.front_default;
    item.src = pokeImg;
  });
};

export const addPokeName = () => {
  const name = document.querySelectorAll('.name');

  name.forEach(async (item) => {
    const { id } = item.parentElement.parentElement;
    const pokeData = await getPokemon(id);
    const pokeName = pokeData.data.name[0].toUpperCase() + pokeData.data.name.substring(1);
    item.innerText = pokeName;
  });
};

export const addPopupPokeData = async () => {
  const popupImg = document.querySelector('.popupImg');
  const popupName = document.querySelector('.popupName');
  const beItem = document.querySelector('.beItem');
  const ptItem = document.querySelector('.ptItem');
  const pwItem = document.querySelector('.pwItem');
  const phItem = document.querySelector('.phItem');
  const { id } = popupImg.parentElement.parentElement.parentElement;
  const pokeData = await getPokemon(id);
  const pokeImg = pokeData.data.sprites.versions['generation-v']['black-white'].animated.front_default;
  const pokeName = pokeData.data.name[0].toUpperCase() + pokeData.data.name.substring(1);
  const baseExperience = pokeData.data.base_experience;
  const pokemonType = pokeData.data.types.map((item) => item.type.name).join(', ');
  const pokemonWeight = pokeData.data.weight;
  const pokemonHeight = pokeData.data.height;

  popupImg.src = pokeImg;
  popupName.innerText = pokeName;
  beItem.innerText = `Base experience: ${baseExperience}`;
  ptItem.innerText = `Pokemon type: ${pokemonType}`;
  pwItem.innerText = `Pokemon weight: ${pokemonWeight}`;
  phItem.innerText = `Pokemon height: ${pokemonHeight}`;
};

export const addPopupPokeComment = async () => {
  const titleCounter = document.querySelector('.titleComment');
  const comments = document.querySelector('.comments');
  const { id } = titleCounter.parentElement.parentElement;
  const userdata = await getPokemonComment(id);
  const arrComments = userdata.data;

  arrComments.forEach((e) => {
    const comment = document.createElement('p');
    comment.classList = 'userCom';
    comment.textContent = `${e.creation_date} - ${e.username}: ${e.comment}`;
    comments.appendChild(comment);
  });

  const counter = counterModule(arrComments[0].username);
  titleCounter.innerHTML = `Comments ( ${counter} )`;
};

export const addPokeLike = async () => {
  const likeCount = document.querySelectorAll('.likeCount');
  const likeData = await getPokemonLikeId();
  const likeDataSort = likeData.sort((a, b) => a.item_id - b.item_id);
  likeDataSort.forEach((itemData) => {
    likeCount.forEach((itemCount, indexCount) => {
      const iCount = indexCount + 1;
      if (itemData.item_id === iCount.toString()) {
        itemCount.innerText = itemData.likes;
      }
    });
  });
};

export const addPokeComment = async () => {
  const form = document.querySelector('.form');
  const item1 = document.querySelector('.user');
  const item2 = document.querySelector('.commentUser');
  const comments = document.querySelector('.comments');
  const oldTitle = document.querySelector('.titleComment');
  const olddata = document.querySelectorAll('.userCom');
  const { id } = item1.parentElement.parentElement.parentElement;
  const name = item1.value;
  const comm = item2.value;
  form.reset();
  postPokemonComment(id, name, comm);

  oldTitle.textContent = '';

  olddata.forEach((item) => {
    item.remove();
  });

  const userdata = await getPokemonComment(id);
  const arrComments = userdata.data;
  arrComments.forEach((e) => {
    const comment = document.createElement('p');
    comment.classList = 'userCom';
    comment.textContent = `${e.creation_date} - ${e.username}: ${e.comment}`;
    comments.appendChild(comment);
  });

  const comment = document.createElement('p');
  comment.classList = 'userCom';
  comment.textContent = `Added recently - ${name}: ${comm}`;
  comments.appendChild(comment);

  const counter = counterModule(arrComments[0].username);
  oldTitle.innerHTML = `Comments ( ${counter} )`;
};
