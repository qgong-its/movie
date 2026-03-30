import './style.css';

import { fetchMovieById } from './modules/network.js';
import { renderMovieCard, setupBtn } from './modules/ui.js';
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
    renderMovieCard(favourite, 'journal-container', 'journal');
  } catch (error) {
    console.log('failed to fetch favourite movies', error);
  }
}

setupBtn('journal-container', ({ type, movieId }) => {
  if (type === 'remove') {
    const favourite = getFromLocalStorage('favourite');

    const updated = favourite.filter(
      (item) => String(item.id) !== String(movieId),
    );

    saveToLocalStorage('favourite', updated);

    init();
  } else if (type === 'note') {
    setupNoteDialog(movieId);
  }
});

// TODO reset
function setupNoteDialog(movieId) {
  const dialog = document.getElementById('note-dialog');
  const cancelBtn = document.getElementById('note-cancel-btn');
  const saveBtn = document.getElementById('note-save-btn');

  const favourite = getFromLocalStorage('favourite');
  const movie = favourite.find((movie) => String(movie.id) === String(movieId));

  const noteInput = document.getElementById('note-input');
  noteInput.value = movie?.note ?? '';

  dialog.showModal();

  dialog.onclose = () => {
    noteInput.value = '';
  };

  cancelBtn.onclick = () => dialog.close();

  saveBtn.onclick = () => {
    const note = noteInput.value;

    const updatedMovie = favourite.map((movie) => {
      if (String(movie.id) === String(movieId)) {
        return {
          ...movie,
          note,
        };
      }

      return movie;
    });

    saveToLocalStorage('favourite', updatedMovie);

    dialog.close();
    init();
  };
}

init();
