const moviesInfor = [
  {
    id: 1,
    title: "The Wild Robot",
    originalTitle: "The Wild Robot",
    genre: "Animation",
    director: "Chris Sanders",
    cast: "Lupita Nyong'o, Pedro Pascal, Kit Connor, Bill Nighy",
    ageRating: "PG",
    description:
      "An intelligent robot shipwrecked on an uninhabited island must learn to adapt to its surroundings and form bonds with the native animals.",
    synopsis:
      "After a shipwreck, an intelligent robot named Roz is stranded on an uninhabited island. To survive the harsh wilderness, Roz must learn to adapt to her surroundings, gradually building warm relationships with the native wildlife and becoming the adoptive parent of an orphaned gosling.",
    year: 2024,
    duration: "1h 42m",
    rating: 8.4,
    className: "movie-card--bg-1",
  },
  {
    id: 2,
    title: "Dune: Part Two",
    originalTitle: "Dune: Part Two",
    genre: "Sci-Fi",
    director: "Denis Villeneuve",
    cast: "Timothée Chalamet, Zendaya, Rebecca Ferguson, Javier Bardem",
    ageRating: "PG-13",
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    synopsis:
      "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee.",
    year: 2024,
    duration: "2h 46m",
    rating: 8.5,
    className: "movie-card--bg-2",
  },
  {
    id: 3,
    title: "Past Lives",
    originalTitle: "Past Lives",
    genre: "Drama",
    director: "Celine Song",
    cast: "Greta Lee, Teo Yoo, John Magaro",
    ageRating: "PG-13",
    description:
      "Nora and Hae Sung, two deeply connected childhood friends, are wrested apart after her family emigrates from South Korea.",
    synopsis:
      "Nora and Hae Sung are two deeply connected childhood friends in South Korea before Nora's family emigrates to Canada. Two decades later, they are reunited in New York for one fateful week as they confront notions of destiny ('In-Yun'), love, and the choices that make a life.",
    year: 2023,
    duration: "1h 46m",
    rating: 7.8,
    className: "movie-card--bg-3",
  },
  {
    id: 4,
    title: "Spider-Man: Across the Spider-Verse",
    originalTitle: "Spider-Man: Across the Spider-Verse",
    genre: "Animation",
    director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
    cast: "Shameik Moore, Hailee Steinfeld, Oscar Isaac, Daniel Kaluuya",
    ageRating: "PG",
    description:
      "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
    synopsis:
      "Miles Morales unexpectedly reunites with Gwen Stacy and is catapulted across the Multiverse, where he encounters the Spider-Society, a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero so he can save the people he loves most.",
    year: 2023,
    duration: "2h 20m",
    rating: 8.6,
    className: "movie-card--bg-4",
  },
  {
    id: 5,
    title: "Anatomy of a Fall",
    originalTitle: "Anatomie d'une chute",
    genre: "Mystery",
    director: "Justine Triet",
    cast: "Sandra Hüller, Swann Arlaud, Milo Machado-Graner",
    ageRating: "R",
    description:
      "A woman is suspected of her husband's murder, and their blind son faces a moral dilemma as the main witness.",
    synopsis:
      "A woman is suspected of murdering her husband after his body is found outside their isolated chalet in the French Alps. The ensuing trial becomes a tense psychological dissection, where their 11-year-old blind son—the sole witness—faces a profound moral dilemma.",
    year: 2023,
    duration: "2h 31m",
    rating: 7.7,
    className: "movie-card--bg-5",
  },
  {
    id: 6,
    title: "The Holdovers",
    originalTitle: "The Holdovers",
    genre: "Comedy",
    director: "Alexander Payne",
    cast: "Paul Giamatti, Dominic Sessa, Da'Vine Joy Randolph",
    ageRating: "R",
    description:
      "A cranky history teacher at a remote prep school is forced to remain on campus during the holidays with a troubled student.",
    synopsis:
      "A curmudgeonly ancient history instructor, universally disliked at a New England prep school, is forced to remain on campus during the 1970 Christmas break to babysit the handful of students with nowhere to go. Eventually, he forms an unlikely bond with one of them—a damaged, brainy troublemaker—and with the school's head cook, who has just lost a son in Vietnam.",
    year: 2023,
    duration: "2h 13m",
    rating: 7.9,
    className: "movie-card--bg-6",
  },
  {
    id: 7,
    title: "Oppenheimer",
    originalTitle: "Oppenheimer",
    genre: "Drama",
    director: "Christopher Nolan",
    cast: "Cillian Murphy, Emily Blunt, Matt Damon, Robert Downey Jr.",
    ageRating: "R",
    description:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.",
    synopsis:
      "An epic biographical thriller chronicling the life of theoretical physicist J. Robert Oppenheimer, who led the Manhattan Project to develop the first nuclear weapons for the United States during World War II, and the ensuing crisis of conscience and unfair political security hearing that followed.",
    year: 2023,
    duration: "3h 00m",
    rating: 8.9,
    className: "movie-card--bg-7",
  },
  {
    id: 8,
    title: "Poor Things",
    originalTitle: "Poor Things",
    genre: "Comedy",
    director: "Yorgos Lanthimos",
    cast: "Emma Stone, Mark Ruffalo, Willem Dafoe, Ramy Youssef",
    ageRating: "R",
    description:
      "The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant scientist Dr. Godwin Baxter.",
    synopsis:
      "The fantastical and bold tale of the evolution of Bella Baxter—a young woman brought back to life by the brilliant, eccentric, and unorthodox scientist Dr. Godwin Baxter. Hungry for freedom and the worldliness she is lacking, Bella runs off with a slick and debauched lawyer on a whirlwind adventure of self-liberation across the continents.",
    year: 2023,
    duration: "2h 21m",
    rating: 7.9,
    className: "movie-card--bg-8",
  },
  {
    id: 9,
    title: "Glass Onion",
    originalTitle: "Glass Onion: A Knives Out Mystery",
    genre: "Mystery",
    director: "Rian Johnson",
    cast: "Daniel Craig, Edward Norton, Janelle Monáe, Kathryn Hahn",
    ageRating: "PG-13",
    description:
      "Tech billionaire Miles Bron invites his friends for a getaway on his private Greek island. When someone turns up dead, Detective Benoit Blanc is on the case.",
    synopsis:
      "Tech billionaire Miles Bron invites his longtime circle of friends for a getaway at his lavish estate on a private Greek island to play a murder mystery game. However, when someone actually turns up dead, world-renowned detective Benoit Blanc steps in to peel back the layers of dark secrets hidden within the group.",
    year: 2022,
    duration: "2h 19m",
    rating: 7.1,
    className: "movie-card--bg-9",
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

const moviesGrid = document.querySelector(".gallery__grid");
const searchInput = document.querySelector(".search-bar__input");
const sortSelect = document.querySelector("#sort-select");
const ratingSelect = document.querySelector("#rating-select");
const genreButtons = document.querySelectorAll(".genre-btn");
const moreFiltersBtn = document.querySelector("#more-filters-btn");
const filterModal = document.querySelector("#filter-modal");
const closeModalBtn = document.querySelector("#close-modal-btn");
const applyFilterBtn = document.querySelector("#apply-filter-btn");
const resetFilterBtn = document.querySelector("#reset-filter-btn");

// Render movie grid
function renderMovies(movieList) {
  moviesGrid.innerHTML = "";

  if (movieList.length === 0) {
    moviesGrid.innerHTML = `
      <div class="gallery__empty">
        <p>No films found matching your criteria.</p>
      </div>
    `;
    return;
  }

  movieList.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.className = `movie-card ${movie.className}`;
    movieCard.dataset.id = movie.id;
    movieCard.innerHTML = `
      <h2 class="movie-card__title">${movie.title}</h2>
      <div class="movie-card__meta">
        <span class="movie-card__rating">★ ${movie.rating}</span>
        <span class="movie-card__tag">${movie.year} • ${movie.genre}</span>
      </div>
    `;
    moviesGrid.appendChild(movieCard);
  });
}

// Unified Filter & Sort Pipeline
function applyAllFiltersAndSort() {
  let result = [...moviesInfor];

  // 1. Search keyword (Title or Genre)
  const keyword = searchInput ? searchInput.value.trim().toLowerCase() : "";
  if (keyword) {
    result = result.filter((movie) => {
      const titleMatch = movie.title.toLowerCase().includes(keyword);
      const genreMatch = movie.genre.toLowerCase().includes(keyword);
      return titleMatch || genreMatch;
    });
  }

  // 2. Genre Filter (Modal checkboxes have priority, otherwise use quick genre button)
  const checkedBoxes = document.querySelectorAll(
    ".modal__genres-list .modal__checkbox:checked",
  );
  const selectedModalGenres = Array.from(checkedBoxes).map((cb) => cb.value);

  if (selectedModalGenres.length > 0) {
    result = result.filter((movie) =>
      selectedModalGenres.includes(movie.genre),
    );
  } else {
    const currentGenreBtn = document.querySelector(".genre-btn--active");
    if (currentGenreBtn) {
      const selectedGenre = currentGenreBtn.textContent.trim();
      if (selectedGenre !== "All films") {
        result = result.filter((movie) => movie.genre === selectedGenre);
      }
    }
  }

  // 3. IMDb Rating Filter
  if (ratingSelect) {
    const selectedRating = ratingSelect.value;
    if (selectedRating === "above-8") {
      result = result.filter((movie) => movie.rating >= 8.0);
    } else if (selectedRating === "7-8") {
      result = result.filter(
        (movie) => movie.rating >= 7.0 && movie.rating < 8.0,
      );
    } else if (selectedRating === "below-7") {
      result = result.filter((movie) => movie.rating < 7.0);
    }
  }

  // 4. Sort
  if (sortSelect) {
    const selectedSort = sortSelect.value;
    if (selectedSort === "rating-desc") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (selectedSort === "year-desc") {
      result.sort((a, b) => b.year - a.year);
    } else if (selectedSort === "title-asc") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (selectedSort === "title-desc") {
      result.sort((a, b) => b.title.localeCompare(a.title));
    }
  }

  renderMovies(result);
}

// Genre Quick Filter Buttons
genreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentGenreButton = document.querySelector(".genre-btn--active");
    if (currentGenreButton) {
      currentGenreButton.classList.remove("genre-btn--active");
    }
    button.classList.add("genre-btn--active");

    // Uncheck modal checkboxes to avoid confusion
    const checkBoxes = document.querySelectorAll(
      ".modal__genres-list .modal__checkbox:checked",
    );
    checkBoxes.forEach((cb) => (cb.checked = false));

    applyAllFiltersAndSort();
  });
});

// Search bar input
if (searchInput) {
  searchInput.addEventListener("input", applyAllFiltersAndSort);
}

// IMDb Rating filter change
if (ratingSelect) {
  ratingSelect.addEventListener("change", applyAllFiltersAndSort);
}

// Sort Select change
if (sortSelect) {
  sortSelect.addEventListener("change", applyAllFiltersAndSort);
}

// Advance Filter Modal Toggle
if (moreFiltersBtn && filterModal && closeModalBtn) {
  moreFiltersBtn.addEventListener("click", () => {
    filterModal.classList.add("modal--open");
  });

  closeModalBtn.addEventListener("click", () => {
    filterModal.classList.remove("modal--open");
  });
}

// Advance Filter Modal Apply
if (applyFilterBtn) {
  applyFilterBtn.addEventListener("click", () => {
    const checkBoxes = document.querySelectorAll(
      ".modal__genres-list .modal__checkbox:checked",
    );
    if (checkBoxes.length > 0) {
      const currentGenreButton = document.querySelector(".genre-btn--active");
      if (currentGenreButton) {
        currentGenreButton.classList.remove("genre-btn--active");
      }
    }
    applyAllFiltersAndSort();
    filterModal.classList.remove("modal--open");
  });
}

// Advance Filter Modal Reset
if (resetFilterBtn) {
  resetFilterBtn.addEventListener("click", () => {
    const checkBoxes = document.querySelectorAll(
      ".modal__genres-list .modal__checkbox:checked",
    );
    checkBoxes.forEach((checkbox) => {
      checkbox.checked = false;
    });

    // Re-select "All films" button
    const allFilmsBtn = Array.from(genreButtons).find(
      (b) => b.textContent.trim() === "All films",
    );
    if (allFilmsBtn) {
      genreButtons.forEach((b) => b.classList.remove("genre-btn--active"));
      allFilmsBtn.classList.add("genre-btn--active");
    }

    applyAllFiltersAndSort();
  });
}

// Render the first time open the website
applyAllFiltersAndSort();

// Authentication tabs
const authTabs = document.querySelector("#auth-tabs");

const signInForm = document.querySelector("#sign-in-form");
const signUpForm = document.querySelector("#sign-up-form");

authTabs.addEventListener("click", (e) => {
  const clickedBtn = e.target.closest(".auth__tab");
  if (!clickedBtn) return;

  authTabs.querySelectorAll(".auth__tab").forEach((tab) => {
    tab.classList.remove("auth__tab--active");
  });

  clickedBtn.classList.add("auth__tab--active");
  if (clickedBtn.dataset.tab === "signup") {
    authTabs.classList.add("auth__tabs--signup");

    signInForm.classList.add("auth-form--hidden");
    signUpForm.classList.remove("auth-form--hidden");
  } else {
    authTabs.classList.remove("auth__tabs--signup");

    signUpForm.classList.add("auth-form--hidden");
    signInForm.classList.remove("auth-form--hidden");
  }
});

// Sign up event
const registerError = document.querySelector("#register-error");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  registerError.textContent = "";

  const userName = document.querySelector("#register-name").value.trim();
  const email = document
    .querySelector("#register-email")
    .value.trim()
    .toLowerCase();
  const password = document.querySelector("#register-password").value;
  const confirmPassword = document.querySelector("#register-confirm").value;

  if (!userName) {
    registerError.textContent = "Please enter your full name.";
    return;
  }

  if (password.length < 8) {
    registerError.textContent = "Password must be at least 8 characters.";
    return;
  }

  const isValidPassword =
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[!@#$%^&*(),.?":{}|<>_-]/.test(password);

  if (!isValidPassword) {
    registerError.textContent =
      "Password must contain at least one uppercase, lowercase, a number, and special character.";
    return;
  }

  if (confirmPassword !== password) {
    registerError.textContent =
      "Confirm password not matching. Please enter the right password.";
    return;
  }

  const users = JSON.parse(localStorage.getItem("cineSelect_users")) || [];
  const isEmailExist = users.some((user) => user.email === email);

  if (isEmailExist) {
    registerError.textContent = "This email has already registered.";
    return;
  }

  const newUser = {
    name: userName,
    email: email,
    password: password,
  };

  users.push(newUser);
  localStorage.setItem("cineSelect_users", JSON.stringify(users));

  signUpForm.reset();
  alert("Account created successfully! Please sign in.");

  const signInTab = document.querySelector('.auth__tab[data-tab="signin"]');
  if (signInTab) {
    signInTab.click();
  }
});

// Open and close auth modal
const authModal = document.querySelector("#auth-modal");
const closeAuthBtn = document.querySelector("#close-auth-btn");

function openAuthModal(tabName = "signin") {
  if (!authModal) return;
  authModal.classList.add("modal--open");
  loadRememberedEmail();

  const targetTab = document.querySelector(`.auth__tab[data-tab="${tabName}"]`);
  if (targetTab) {
    targetTab.click();
  }
}

function closeAuthModal() {
  if (authModal) {
    authModal.classList.remove("modal--open");
  }
}

if (closeAuthBtn) {
  closeAuthBtn.addEventListener("click", closeAuthModal);
}

if (authModal) {
  authModal.addEventListener("click", (e) => {
    if (e.target === authModal) {
      closeAuthModal();
    }
  });
}

// Toggle password visibility
const togglePasswordButtons = document.querySelectorAll(
  ".auth-form__toggle-pw",
);

togglePasswordButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const input = button.previousElementSibling;
    if (!input) return;

    if (input.type === "password") {
      input.type = "text";
      button.style.color = "#0f172a";
    } else {
      input.type = "password";
      button.style.color = "#64748b";
    }
  });
});

// Header user state
const headerActions = document.querySelector(".header__actions");

function renderHeaderAuth() {
  if (!headerActions) return;

  const currentUser = JSON.parse(
    localStorage.getItem("cineSelect_currentUser"),
  );

  if (currentUser) {
    headerActions.innerHTML = `
      <span class="user-greeting" style="font-weight: 500; font-size: 15px;">
        Hi, <strong>${currentUser.name}</strong>
      </span>
      <button class="btn btn--outline" id="logout-btn">Log out</button>
    `;

    const logoutBtn = document.querySelector("#logout-btn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("cineSelect_currentUser");
        renderHeaderAuth();
      });
    }
  } else {
    headerActions.innerHTML = `
      <button class="btn btn--outline" id="sign-in-btn">Sign in</button>
      <button class="btn btn--primary" id="sign-up-btn">Sign up</button>
    `;

    const signInBtn = document.querySelector("#sign-in-btn");
    const signUpBtn = document.querySelector("#sign-up-btn");

    if (signInBtn) {
      signInBtn.addEventListener("click", () => openAuthModal("signin"));
    }
    if (signUpBtn) {
      signUpBtn.addEventListener("click", () => openAuthModal("signup"));
    }
  }
}

renderHeaderAuth();

// Sign-in form submission
const loginError = document.querySelector("#login-error");
const loginEmailInput = document.querySelector("#login-email");
const loginPasswordInput = document.querySelector("#login-password");
const rememberMeCheckbox = document.querySelector("#remember-me");

if (signInForm) {
  signInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    loginError.textContent = "";

    const email = loginEmailInput.value.trim().toLowerCase();
    const password = loginPasswordInput.value;
    const isRemember = rememberMeCheckbox.checked;

    //  Check account in localStorage
    const users = JSON.parse(localStorage.getItem("cineSelect_users")) || [];
    const matchedUser = users.find(
      (user) => user.email === email && user.password === password,
    );

    if (!matchedUser) {
      loginError.textContent = "Invalid email or password.";
      return;
    }

    //  Save active user session (excluding password)
    const currentUser = {
      name: matchedUser.name,
      email: matchedUser.email,
    };
    localStorage.setItem("cineSelect_currentUser", JSON.stringify(currentUser));

    //  Save or remove remembered email
    if (isRemember) {
      localStorage.setItem("cineSelect_rememberedEmail", email);
    } else {
      localStorage.removeItem("cineSelect_rememberedEmail");
    }

    // Reset form, close modal, and update header
    signInForm.reset();
    closeAuthModal();
    renderHeaderAuth();
  });
}

// Auto-fill remembered email
function loadRememberedEmail() {
  const rememberedEmail = localStorage.getItem("cineSelect_rememberedEmail");
  if (rememberedEmail && loginEmailInput && rememberMeCheckbox) {
    loginEmailInput.value = rememberedEmail;
    rememberMeCheckbox.checked = true;
  }
}

loadRememberedEmail();

function getRelatedMovies(currentMovie) {
  const sameGenre = moviesInfor.filter(
    (m) => m.id !== currentMovie.id && m.genre === currentMovie.genre,
  );

  if (sameGenre.length >= 3) {
    return sameGenre.slice(0, 3);
  }

  const remainingCount = 3 - sameGenre.length;
  const otherMovies = moviesInfor
    .filter((m) => m.id !== currentMovie.id && m.genre !== currentMovie.genre)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, remainingCount);

  return [...sameGenre, ...otherMovies];
}

const closeDetailBtn = document.querySelector("#close-detail-btn");
const movieDetailModal = document.querySelector("#movie-detail-modal");
const movieDetailContent = document.querySelector("#movie-detail-content");

function openMovieDetail(movieId) {
  const movie = moviesInfor.find((m) => m.id === Number(movieId));
  if (!movie || !movieDetailModal || !movieDetailContent) return;

  const relatedMovies = getRelatedMovies(movie);

  movieDetailContent.innerHTML = `
    <div class="movie-detail__hero ${movie.className}">
      <div class="movie-detail__badges">
        <span class="badge badge--rating">★ ${movie.rating}</span>
        <span class="badge badge--age">${movie.ageRating}</span>
        <span class="badge badge--genre">${movie.genre}</span>
      </div>
      <h2 class="movie-detail__title">${movie.title}</h2>
      ${movie.originalTitle !== movie.title ? `<p class="movie-detail__original-title">Tựa gốc: ${movie.originalTitle}</p>` : ""}
      <div class="movie-detail__meta-row">
        <span>${movie.year}</span> • <span>${movie.duration}</span>
      </div>
    </div>

    <div class="movie-detail__body">
      <div class="movie-detail__section">
        <p class="movie-detail__label">Plot summary</p>
        <p class="movie-detail__synopsis">${movie.synopsis}</p>
      </div>

      <div class="movie-detail__grid-info">
        <div>
          <p class="movie-detail__label">Director</p>
          <p class="movie-detail__info-value">${movie.director}</p>
        </div>
        <div>
          <p class="movie-detail__label">Casts</p>
          <p class="movie-detail__info-value">${movie.cast}</p>
        </div>
      </div>

      <!-- 3 Phim cùng thể loại gợi ý -->
      <div class="movie-detail__related">
        <h3 class="movie-detail__related-title">Gợi ý tác phẩm cùng thể loại</h3>
        <div class="movie-detail__related-grid">
          ${relatedMovies
            .map(
              (rel) => `
            <div class="related-card ${rel.className}" data-id="${rel.id}">
              <p class="related-card__title">${rel.title}</p>
              <p class="related-card__meta">★ ${rel.rating} • ${rel.year}</p>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    </div>
  `;

  movieDetailModal.classList.add("modal--open");
}

// dectect movies element
if (moviesGrid) {
  moviesGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".movie-card");
    if (card && card.dataset.id) {
      openMovieDetail(card.dataset.id);
    }
  });
}

// close popup
function closeMovieDetail() {
  if (movieDetailModal) {
    movieDetailModal.classList.remove("modal--open");
  }
}

// Click directly into the close button
if (closeDetailBtn) {
  closeDetailBtn.addEventListener("click", closeMovieDetail);
}

// Click into backdrop blankspace
if (movieDetailModal) {
  movieDetailModal.addEventListener("click", (e) => {
    if (e.target === movieDetailModal) {
      closeMovieDetail();
    }
  });
}

// Using escape button
document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    movieDetailModal &&
    movieDetailModal.classList.contains("modal--open")
  ) {
    closeMovieDetail();
  }
});

// Move to the related movie
if (movieDetailContent) {
  movieDetailContent.addEventListener("click", (e) => {
    const relCard = e.target.closest(".related-card");
    if (relCard && relCard.dataset.id) {
      openMovieDetail(relCard.dataset.id);
      const modalBox = movieDetailModal.querySelector(".modal__card--detail");
      if (modalBox) modalBox.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}
