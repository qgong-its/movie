const BASE_URL = 'https://api.themoviedb.org/3';
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const defaultOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: TOKEN,
  },
};

async function request(endpoint, options = {}) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
      Authorization: defaultOptions.headers.Authorization,
    },
  });

  if (!response.ok) throw new Error(`HTTP ${response.status}`);

  return response.json();
}

export async function fetchPopularMovies() {
  const movies = await request('/movie/popular');
  return movies.results;
}

export async function searchMovies(query) {
  const movie = await request(
    `/search/movie?query=${encodeURIComponent(query)}`,
  );
  return movie.results;
}
