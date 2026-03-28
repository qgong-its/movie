import './style.css';

import { fetchPopularMovies, searchMovies } from './modules/network.js';
import { renderMovieCard, addRemoveBtn, searchBtn } from './modules/ui.js';
import { getFromLocalStorage, saveToLocalStorage } from './modules/storage.js';

async function init() {
  try {
    const movies = await fetchPopularMovies();
    // console.log(movies);
    renderMovieCard(movies, 'card-container');
    // const movie = await searchMovies('Project Hail Mary');
    // console.log(movie);
    // renderMovieCard(movie.results, 'movie-container');
  } catch (error) {
    console.log('failed to fetch movies: ', error);
  }

  function handleFavouriteAction({ type, movieId }) {
    const favourite = getFromLocalStorage('favourite');

    if (type === 'add') {
      if (!favourite.includes(movieId)) {
        favourite.unshift(movieId);
        saveToLocalStorage('favourite', favourite);
      }
    } else if (type === 'remove') {
      const index = favourite.indexOf(movieId);
      if (index !== -1) {
        favourite.splice(index, 1);
        saveToLocalStorage('favourite', favourite);
      }
    }
  }

  addRemoveBtn('card-container', handleFavouriteAction);

  addRemoveBtn('search-results-container', handleFavouriteAction);

  searchBtn('search-form', async (query) => {
    const container = document.getElementById('search-results-container');
    container.innerHTML = '';
    const dialog = document.getElementById('search-results-dialog');
    const movies = await searchMovies(query);
    if (movies?.length > 0) {
      // console.log(movies);
      renderMovieCard(movies, 'search-results-container');
    } else {
      container.innerHTML = `
        <p class="col-span-full text-center text-slate-400">
          No movies found.
        </p>
      `;
    }
    dialog.showModal();
    document.getElementById('close-dialog').onclick = () => dialog.close();
  });
}

init();
