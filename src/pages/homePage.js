import { createMovieCard } from '../components/movieCard.js';

export function createHomePage() {
  const movies = [
    {
      title: 'Dune: Part Two',
      year: '2024',
      genre: 'Action',
      image: 'https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg',
    },
    {
      title: 'Oppenheimer',
      year: '2023',
      genre: 'Drama',
      image: 'https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg',
    },
    {
      title: 'Avatar: The Way of Water',
      year: '2022',
      genre: 'Sci-Fi',
      image: 'https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
    },
    {
      title: '1917',
      year: '2019',
      genre: 'War',
      image: 'https://image.tmdb.org/t/p/w500/iZf0KyrE25z1sage4SYFLCCrMi9.jpg',
    },
    {
      title: 'John Wick 4',
      year: '2023',
      genre: 'Action',
      image: 'https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg',
    },
    {
      title: 'Barbie',
      year: '2023',
      genre: 'Drama',
      image: 'https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
    },
    {
      title: 'The Conjuring',
      year: '2022',
      genre: 'Sci-Fi',
      image: 'https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg',
    },
    {
      title: 'La La Land',
      year: '2016',
      genre: 'War',
      image: 'https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg',
    },
  ];

  return `
    <div class="min-h-screen bg-[#0F172A] text-[#CBD5E1]">
      <div class="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header class="mb-8 flex items-center justify-between rounded-2xl border border-[#334155] bg-[#0B1220]/90 px-5 py-4 shadow-lg">
          <div class="flex items-center gap-3">
            <span class="text-xl text-[#FACC15]">🎬</span>
            <h1 class="text-xl font-bold tracking-wide text-[#CBD5E1]">Movie Diary</h1>
          </div>

          <nav class="hidden items-center gap-6 md:flex">
            <a
              href="#"
              class="border-b-2 border-[#FACC15] pb-1 text-sm font-medium text-[#FACC15]"
            >
              Home
            </a>
            <a
              href="#"
              class="border-b-2 border-transparent pb-1 text-sm font-medium text-[#CBD5E1] transition hover:border-[#FACC15]/50 hover:text-[#FACC15]"
            >
              Journal
            </a>
            <button
              class="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1E293B] text-[#CBD5E1] transition hover:bg-[#334155]"
            >
              ☾
            </button>
          </nav>

          <button
            class="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1E293B] text-[#CBD5E1] md:hidden"
          >
            ☰
          </button>
        </header>

        <main class="flex-1">
          <section class="mb-10 overflow-hidden rounded-3xl border border-[#334155] bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.14),transparent_35%),linear-gradient(135deg,#0B1220,#0F172A,#111827)] px-4 py-10 shadow-2xl sm:px-8">
            <div class="mx-auto max-w-3xl text-center">
              <h2 class="mb-3 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                Discover <span class="text-[#FACC15]">Movies</span>
              </h2>

              <p class="mb-8 text-sm text-[#94A3B8] sm:text-base">
                Search and save your favorite movies
              </p>

              <div class="mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl border border-[#334155] bg-[#1E293B]/70 p-3 shadow-lg sm:flex-row">
                <div class="relative flex-1">
                  <span class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                    🔍
                  </span>
                  <input
                    type="text"
                    placeholder="Search movies..."
                    class="w-full rounded-xl border border-transparent bg-[#0F172A] py-3 pl-11 pr-4 text-sm text-[#CBD5E1] outline-none transition placeholder:text-[#64748B] focus:border-[#FACC15]"
                  />
                </div>

                <button
                  class="rounded-xl bg-[#FACC15] px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:brightness-110"
                >
                  Search
                </button>
              </div>
            </div>
          </section>

          <section class="mb-10">
            <div class="mb-6 flex items-center gap-2">
              <span class="text-[#FACC15]">🔥</span>
              <h2 class="text-2xl font-bold text-white">Popular Movies</h2>
            </div>

            <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              ${movies.map((movie) => createMovieCard(movie)).join('')}
            </div>
          </section>
        </main>

        <footer class="mt-auto pt-6 text-center text-sm text-[#64748B]">
          Movie Diary Project © 2025
        </footer>
      </div>
    </div>
  `;
}
