import './style.css';

import { fetchMovieById } from './modules/network.js';
import { renderMovieCard, addRemoveBtn, searchBtn } from './modules/ui.js';
import { getFromLocalStorage, saveToLocalStorage } from './modules/storage.js';

function renderEmpty() {
  const container = document.getElementById('journal-container');
  container.innerHTML = `
    <div class="col-span-full text-center text-slate-400">
      No favourite movies yet.
    </div>
  `;
}

async function init() {
  const favourite = getFromLocalStorage('favourite');

  if (!favourite.length) {
    renderEmpty();
    return;
  }

  try {
    renderMovieCard(favourite, 'journal-container');
  } catch (error) {
    console.log('failed to fetch favourite movies', error);
  }
}

addRemoveBtn('journal-container', ({ type, movieId }) => {
  if (type !== 'remove') return;

  const favourite = getFromLocalStorage('favourite');

  const updated = favourite.filter(
    (item) => String(item.id) !== String(movieId),
  );

  saveToLocalStorage('favourite', updated);

  init();
});

init();
