export function createMovieCard(movie) {
  return `
    <article class="overflow-hidden rounded-2xl border border-[#334155] bg-[#1E293B]/90 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-[#FACC15]/40">
      <div class="aspect-[4/3] w-full overflow-hidden bg-[#0F172A]">
        <img
          src="${movie.image}"
          alt="${movie.title}"
          class="h-full w-full object-cover"
        />
      </div>

      <div class="p-4">
        <h3 class="mb-2 text-lg font-semibold text-[#CBD5E1]">${movie.title}</h3>

        <p class="mb-4 text-sm text-[#94A3B8]">
          ${movie.year} <span class="mx-1">•</span> ${movie.genre}
        </p>

        <button
          class="flex w-full items-center justify-center gap-2 rounded-full bg-[#0F172A] px-4 py-2 text-sm font-medium text-[#CBD5E1] transition hover:bg-[#FACC15] hover:text-[#0F172A]"
        >
          <span>♡</span>
          <span>Add to Favourites</span>
        </button>
      </div>
    </article>
  `;
}
