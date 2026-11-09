const movies = [
  {
    id: 1,
    title: "The Wild Robot",
    genre: "Animation",
    description:
      "An intelligent robot shipwrecked on an uninhabited island must learn to adapt to its surroundings and form bonds with the native animals.",
    year: 2024,
    duration: "1h 42m",
    rating: 8.4,
    className: "movie-1",
  },
  {
    id: 2,
    title: "Dune: Part Two",
    genre: "Sci-Fi",
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    year: 2024,
    duration: "2h 46m",
    rating: 8.5,
    className: "movie-2",
  },
  {
    id: 3,
    title: "Past Lives",
    genre: "Drama",
    description:
      "Nora and Hae Sung, two deeply connected childhood friends, are wrested apart after her family emigrates from South Korea.",
    year: 2023,
    duration: "1h 46m",
    rating: 7.8,
    className: "movie-3",
  },
  {
    id: 4,
    title: "Spider-Man: Across the Spider-Verse",
    genre: "Animation",
    description:
      "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
    year: 2023,
    duration: "2h 20m",
    rating: 8.6,
    className: "movie-4",
  },
  {
    id: 5,
    title: "Anatomy of a Fall",
    genre: "Mystery",
    description:
      "A woman is suspected of her husband's murder, and their blind son faces a moral dilemma as the main witness.",
    year: 2023,
    duration: "2h 31m",
    rating: 7.7,
    className: "movie-5",
  },
  {
    id: 6,
    title: "The Holdovers",
    genre: "Comedy",
    description:
      "A cranky history teacher at a remote prep school is forced to remain on campus during the holidays with a troubled student.",
    year: 2023,
    duration: "2h 13m",
    rating: 7.9,
    className: "movie-6",
  },
  {
    id: 7,
    title: "Oppenheimer",
    genre: "Drama",
    description:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.",
    year: 2023,
    duration: "3h 00m",
    rating: 8.9,
    className: "movie-7",
  },
  {
    id: 8,
    title: "Poor Things",
    genre: "Comedy",
    description:
      "The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant scientist Dr. Godwin Baxter.",
    year: 2023,
    duration: "2h 21m",
    rating: 7.9,
    className: "movie-8",
  },
  {
    id: 9,
    title: "Glass Onion",
    genre: "Mystery",
    description:
      "Tech billionaire Miles Bron invites his friends for a getaway on his private Greek island. When someone turns up dead, Detective Benoit Blanc is on the case.",
    year: 2022,
    duration: "2h 19m",
    rating: 7.1,
    className: "movie-9",
  },
];

// Genre list
const genres = [
  "All films",
  "Animation",
  "Drama",
  "Sci-Fi",
  "Comedy",
  "Mystery",
];

const moviesGrid = document.querySelector(".movies-grid");

//render movie grid
function renderMovies(movieList) {
  moviesGrid.innerHTML = "";

  movieList.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.className = `${movie.className} movie-element`;
    movieCard.innerHTML = `<h2>${movie.title}</h2>`;
    moviesGrid.appendChild(movieCard);
  });
}

const genreButtons = document.querySelectorAll(".genre-btn");

genreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentGenreButton = document.querySelector(".genre-btn--active");
    if (currentGenreButton) {
      currentGenreButton.classList.remove("genre-btn--active");
    }
    button.classList.add("genre-btn--active");

    const selectedGenre = button.textContent.trim();
    if (selectedGenre === "All films") {
      renderMovies(movies);
    } else {
      const filteredMovies = movies.filter((movie) => {
        return movie.genre === selectedGenre;
      });
      renderMovies(filteredMovies);
    }
  });
});

//Render the first time open the website
renderMovies(movies);

//Search bar

const searchInput = document.querySelector(".search-bar__input");
searchInput.addEventListener("input", (input) => {
  const keyword = input.target.value.trim().toLowerCase();

  const filteredMovies = movies.filter((movie) => {
    const titleMatch = movie.title.toLowerCase().trim().includes(keyword);
    const genreMatch = movie.genre.toLowerCase().trim().includes(keyword);
    return titleMatch || genreMatch;
  });
  renderMovies(filteredMovies);
});

//Advance Filter (visibility)
const filterBtn = document.querySelector(".gallery-header__more-btn");
const filterModal = document.querySelector(".modal-backdrop");
const filterClsBtn = document.querySelector(".modal-close-btn");

filterBtn.addEventListener("click", () => {
  filterModal.classList.add("open");
});

filterClsBtn.addEventListener("click", () => {
  filterModal.classList.remove("open");
});

//Advance Filter Btn Feature
const applyFilterBtn = document.getElementById("#apply-filter-btn");

applyFilterBtn.addEventListener("click", () => {
  const checkBoxes = document.querySelectorAll(
    ".modal-genres-list input:checked",
  );

  const selectedFilterGenres = Array.from(checkBoxes).map((cb) => cb.value);

  if (selectedFilterGenres.length === 0) {
    renderMovies(movies);
  } else {
    const filteredMovies = movies.filter((movie) => {
      return selectedFilterGenres.includes(movie.genre);
    });
    renderMovies(filteredMovies);
  }
  filterModal.classList.remove("open");
});
