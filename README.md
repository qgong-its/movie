# 🎬 Movie Diary (TMDB API)

A small movie diary web app built with **HTML**, **TailwindCSS**, and **JavaScript ES Modules (ESM)**.

This project demonstrates how to work with:

- **DOM manipulation**
- **Fetch API**
- **Web Storage (`localStorage`)**
- **modular JavaScript architecture**
- **incremental team development with Pull Requests**

---

## 1. Project Goal

The goal of this project is to build a simple multi-page movie app with two main views:

- **Homepage**
  Fetch and display popular movies from the **TMDB API**

- **Journal Page**
  Show the user’s favourite movies stored in `localStorage`, including personal notes

The app should be styled **only with TailwindCSS** and structured with **ES Modules** for clean separation of concerns.

---

## 2. Functional Requirements

### Shared requirements

- Group project
- Public GitHub repository
- Work with Pull Requests
- Use `main` as integration branch
- Demonstrate:
  - DOM
  - Web Storage
  - Fetch API
- Style the app with **TailwindCSS only**

### Movie-specific requirements

- Two pages:
  - `index.html` ↔ `main.js`
  - `journal.html` ↔ `journal.js`
- Navbar on both pages
- Fetch and display popular movies on the homepage
- Search movies with a search bar
- Show search results or feedback inside a dialog
- Render movie cards with image, title, and info
- Add movies to favourites
- Save favourites in `localStorage`
- Show favourites on the journal page
- Allow personal notes per movie and persist them in `localStorage`

---

## 3. Tech Stack

- **HTML5**
- **TailwindCSS v4 (via Vite plugin)**
- **JavaScript (ES Modules)**
- **Vite (Build tool & Dev server)**
- **TMDB API**
- **localStorage**

---

## 4. Project Structure

```text
project-root/
│
├── index.html                # Homepage
├── journal.html              # Journal page
│
├── src
│   ├── modules/
│   │    ├── storage.js            # localStorage logic
│   │    ├── network.js            # API requests
│   │    └── ui.js                 # DOM rendering functions
│   │
│   ├── main.js                    # Homepage entry point
│   ├── journal.js                 # Journal page entry point
│   │
│   └── style.css                  # import teilwind css
│
└── assets/
    └── optional/             # images/icons if needed
```

---

## 5. Architecture

The app is split into small modules so that each file has **one clear responsibility**.

### Module responsibilities

#### `storage.js`

Handles all `localStorage` operations, for example:

- get favourites
- save favourites
- add movie to favourites
- remove movie from favourites
- update note for a movie

#### `network.js`

Handles all API communication, for example:

- fetch popular movies
- search movies by query
- handle request errors

#### `ui.js`

Handles all DOM-related tasks, for example:

- create movie cards
- render lists of movies
- update empty states
- connect button events to actions

#### `main.js`

Controls homepage logic:

- load popular movies on page load
- handle search form submission
- show results in dialog
- connect UI with storage actions

#### `journal.js`

Controls journal page logic:

- load favourite movies from `localStorage`
- render saved entries
- allow note editing
- update or remove entries

---

## 6. Architecture Diagram

```text
                 ┌───────────────────────┐
                 │       index.html      │
                 │     journal.html      │
                 └───────────┬───────────┘
                             │
                imports / page entry points
                             │
          ┌──────────────────┴──────────────────┐
          │                                     │
┌──────────────────────┐           ┌──────────────────────┐
│       main.js        │           │      journal.js      │
│ homepage controller  │           │ journal controller   │
└───────────┬──────────┘           └───────────┬──────────┘
            │                                  │
            ├──────────────┬───────────────────┤
            │              │                   │
            ▼              ▼                   ▼
   ┌────────────────┐ ┌───────────────┐ ┌────────────────┐
   │   network.js   │ │  storage.js   │ │     ui.js      │
   │ API requests   │ │ localStorage  │ │ DOM rendering  │
   └────────────────┘ └───────────────┘ └────────────────┘
```

---

## 7. Data Flow

### Homepage flow

```text
Page loads
   ↓
main.js starts
   ↓
network.js fetches popular movies from TMDB
   ↓
main.js receives movie data
   ↓
ui.js renders movie cards
   ↓
User clicks "Add to favourites"
   ↓
storage.js updates localStorage
```

### Search flow

```text
User submits search form
   ↓
main.js reads search input
   ↓
network.js sends search request
   ↓
Result data returns
   ↓
ui.js shows result / feedback in dialog
```

### Journal flow

```text
User opens journal.html
   ↓
journal.js starts
   ↓
storage.js reads favourites from localStorage
   ↓
ui.js renders saved movies
   ↓
User adds or edits a note
   ↓
storage.js updates the same movie object in localStorage
```

---

## 8. localStorage Data Model

A possible structure for favourites:

```json
[
  {
    "id": 123,
    "title": "Inception",
    "poster_path": "/image.jpg",
    "release_date": "2010-07-16",
    "overview": "A mind-bending sci-fi thriller.",
    "note": "Watch again this weekend."
  }
]
```

This structure makes it easy to:

- render saved movies later
- attach notes to the same object
- avoid managing separate arrays for notes

---

## 9. Example Responsibilities by Page

### `index.html` / `main.js`

- show homepage layout
- display popular movies
- search movies
- add to favourites

### `journal.html` / `journal.js`

- display saved favourites
- edit notes
- optionally remove entries

---

## 10. Suggested UI Sections

### Homepage

- Navbar
- Hero / intro section
- Search form
- Movie grid
- Dialog for search result / feedback

### Journal page

- Navbar
- Page title
- Saved favourites grid or list
- Notes area for each movie
- Empty state if no favourites exist

---

## 11. Suggested Development Plan

### Step 1 — Setup

- create file structure
- connect TailwindCSS
- connect scripts with `type="module"`

### Step 2 — Network

- fetch popular movies
- test API response in console

### Step 3 — UI Rendering

- build movie card function
- render fetched movies on homepage

### Step 4 — Storage

- implement add/get/save favourites
- test `localStorage`

### Step 5 — Journal

- render saved favourites on second page
- add note persistence

### Step 6 — Search

- implement search form + dialog feedback

### Step 7 — Polish

- improve spacing, layout, empty states, and error messages

---

## 12. Branching and Collaboration

Suggested branch naming:

```text
feature/fetch-popular-movies
feature/render-movie-cards
feature/add-favourites-storage
feature/journal-page
feature/search-dialog
chore/setup-project
docs/update-readme
fix/search-error-handling
```

Suggested PR workflow:

1. Create a feature branch
2. Work on one small task
3. Open a Pull Request
4. Review together
5. Merge into `main`

---

## 13. Code Quality Notes

To keep the code easy to explain during presentation:

- keep functions small
- avoid mixing fetch logic with DOM rendering
- avoid duplicated code
- use clear names like:
  - `fetchPopularMovies()`
  - `renderMovieCards()`
  - `addToFavourites()`
  - `updateMovieNote()`

### 13.1 Naming Conventions

- **Variables** & **Functions**: Use **camelCase** (e.g., userProfile, getMovieData).
- **Constants**: Use **UPPER_SNAKE_CASE** (e.g., API_KEY, MAX_RESULTS).
- **Function Names**: Start with a **verb** to describe the action (e.g., renderList, fetchData, handleClick).
- **Classes**: Use **PascalCase** (e.g., MovieController).

### 13.2 Code Quality & Formating

To keep the code clean and consistent across the team, we use ESLint and Prettier.

- **Auto-format code**: Before committing, please run the formatter to ensure consistent styling:

```Bash
npm run format

```

- **Linting**: Check for code errors or stylistic issues:

```Bash
npm run lint

```

---

## 14. Stretch Ideas

Optional improvements:

- prevent duplicate favourites
- add remove button
- show saved count in navbar
- show toast / message after saving
- add loading and error states
- truncate long overviews cleanly

---

## 15. Quick Start & Installation

1. Clone the repository

```Bash
git clone git@github.com:qgong-its/movie.git
cd movie
```

2. Install dependencies

```Bash
# Since we are using Vite and Tailwind v4, you must install the necessary packages first:
npm install
```

3. Start the development server

```Bash
# The app will be available at http://localhost:5173
npm run dev
```

4. Build for production

```Bash
# The app will be available at http://localhost:5173
npm run build
```

---

## 16. Resources

- TMDB API documentation
- TailwindCSS documentation

---

## 17. Summary

This project is a good example of a beginner-friendly frontend application with **clear separation between data, storage, and UI**.

The architecture is simple but already follows real frontend engineering ideas:

- **network layer**
- **storage layer**
- **UI layer**
- **page-level controllers**

That makes the project easier to:

- build in a team
- review with Pull Requests
- present to instructors
- extend later

```

```
