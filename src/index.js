import './index.scss';
import { header, main, footer } from './modules/wholePage.js';
import { renderPokemon, popupPokemon } from './modules/handlePage.js';
import { postPokemonLikeId } from './modules/crudInvolvementAPI.js';
import { addPokeComment } from './modules/handlePokeAPI.js';
import counterLikes from './modules/counterLikes.js';
import counterItems from './modules/counterItems.js';

header();
main();
renderPokemon();
counterItems();
footer();

const commentBtn = document.querySelectorAll('.commentBtn');
const likeBtn = document.querySelectorAll('.likeBtn');

commentBtn.forEach((item) => {
  item.addEventListener('click', () => {
    const { id } = item.parentElement.parentElement;
    popupPokemon(id);

    const btnClose = document.querySelector('.closeBtn');
    const commButton = document.querySelector('.submit');

    btnClose.addEventListener('click', () => {
      const divClose = document.querySelector('.cardPop');
      const blur = document.querySelector('.blur');
      divClose.remove();
      blur.remove();
    });

    commButton.addEventListener('click', (e) => {
      e.preventDefault();
      addPokeComment();
    });
  });
});

likeBtn.forEach((item) => {
  item.addEventListener('click', () => {
    const { id } = item.parentElement.parentElement.parentElement;
    postPokemonLikeId(id);
    counterLikes(id);
  });
});
