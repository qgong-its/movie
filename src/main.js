import './style.css';

import { fetchPopularMovies, searchMovies } from './modules/network.js';
import { renderMovieCard, setupBtn } from './modules/ui.js';
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

  setupBtn('card-container', ({ type, movieId }) => {
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
  });
}

init();
