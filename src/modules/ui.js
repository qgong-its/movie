const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

export function renderMovieCard(movies, containerId) {
  const container = document.getElementById(containerId);

  const movieCard = movies
    .map(
      (movie) => `
        <article class="movie-card group relative flex h-full flex-col rounded-xl border border-[#334155] bg-[#1E293B] p-3 shadow-md transition-all hover:-translate-y-1 hover:border-[#FACC15]/50" data-id="${movie.id}">
          <div class="relative aspect-2/3 overflow-hidden rounded-lg bg-slate-800">
            <img src="${buildImageUrl(movie.poster_path)}" alt="${movie.title}" class="h-full w-full object-cover">
            <div class="absolute right-1.5 top-1.5 rounded bg-[#0F172A]/90 px-1.5 py-0.5 text-[10px] font-bold text-[#FACC15] backdrop-blur-sm">
              ★ ${movie.vote_average.toFixed(1)}
            </div>
            <button class="remove-btn absolute left-1.5 top-1.5 opacity-0 group-hover:opacity-100 transition-opacity bg-red-500/80 hover:bg-red-600 p-1 rounded text-white" title="Remove">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" stroke-width="3"></path></svg>
            </button>
          </div>
          <div class="flex flex-1 flex-col pt-3">
            <h3 class="line-clamp-1 text-sm font-bold text-white group-hover:text-[#FACC15]" title="${movie.title}">
              ${movie.title}
            </h3>
            <div class="mt-1 flex items-center justify-between text-[10px] text-slate-500">
              <span>${movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'}</span>
              <span>Pop: ${Math.round(movie.popularity)}</span>
            </div>
            <p class="mt-2 line-clamp-1 text-[11px] text-slate-400 italic">
              ${movie.overview || 'No info'}
            </p>
            <button class="add-btn mt-3 w-full rounded-lg bg-[#FACC15] py-1.5 text-xs font-bold text-[#0F172A] transition hover:scale-[1.02] active:scale-95">
              + Add
            </button>
          </div>
        </article>`,
    )
    .join('');

  container.innerHTML = movieCard;
}

export function buildImageUrl(path) {
  if (!path) return '';

  return IMAGE_BASE + path;
}

// containerId = 'card-container'
export function addRemoveBtn(containerId, callback) {
  const container = document.getElementById(containerId);

  container.addEventListener('click', (event) => {
    const card = event.target.closest('.movie-card');
    if (!card) return;
    const movieId = card.dataset.id;
    // console.log(movieId);
    if (event.target.closest('.add-btn')) {
      callback({ type: 'add', movieId: movieId });
    } else if (event.target.closest('.remove-btn')) {
      callback({ type: 'remove', movieId: movieId });
    }
  });
}

// containerId = 'search-form'
export function searchBtn(containerId, callback) {
  const form = document.getElementById(containerId);
  if (!form) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('search-input');
    // console.log(input);
    if (input) {
      const query = input.value.trim();
      // console.log(query);
      callback(query);
    }
  });
}
