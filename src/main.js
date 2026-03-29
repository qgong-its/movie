import './style.css';

import { fetchPopularMovies, searchMovies } from './modules/network.js';
import { renderMovieCard, addRemoveBtn, searchBtn } from './modules/ui.js';
import { getFromLocalStorage, saveToLocalStorage } from './modules/storage.js';

let fetchedMovies = [];

async function init() {
  try {
    const movies = await fetchPopularMovies();
    fetchedMovies = movies;
    renderMovieCard(movies, 'card-container');
  } catch (error) {
    console.log('failed to fetch movies: ', error);
  }

  function handleFavouriteAction({ type, movieId }) {
    const favourite = getFromLocalStorage('favourite');

    if (type === 'add') {
      if (!favourite.includes(movieId)) {
        const movie = fetchedMovies.find(
          (item) => String(item.id) === String(movieId),
        );
        if (!movie) return;

        const existed = favourite.some(
          (item) => String(item.id) === String(movieId),
        );
        if (existed) return;

        const movieEntry = {
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
          vote_average: movie.vote_average,
          release_date: movie.release_date,
          popularity: movie.popularity,
          overview: movie.overview,
          note: '',
        };

        favourite.unshift(movieEntry);
        saveToLocalStorage('favourite', favourite);
      }
    } else if (type === 'remove') {
      const updated = favourite.filter(
        (item) => String(item.id) !== String(movieId),
      );
      saveToLocalStorage('favourite', updated);
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
