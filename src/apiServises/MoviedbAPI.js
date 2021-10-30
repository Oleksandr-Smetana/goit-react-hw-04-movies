const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '41a215d12341665c3bdfd42bbc3f5d68';

function fetchFromThemoviedb(url = '') {
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('No movies found.'));
  });
}

// фетч популярных фильмов за неделю на HomeView
export function getTrendingMovies() {
  return fetchFromThemoviedb(
    `${BASE_URL}trending/movie/week?api_key=${API_KEY}`,
  );
}

// фетч фильмов по запросу на MoviesView
export function getMoviesBySearch(movieQuery) {
  return fetchFromThemoviedb(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${movieQuery}`,
  );
  // .then(response => {
  //   return response;
  // })
  // .catch(error => console.log(error));
}

// фетч детальной информации о фильме
export function getMovieDetails(movieId) {
  return fetchFromThemoviedb(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`,
  );
}

// допольнительный фетч актерского состава
export function getMovieCast(movieId) {
  return fetchFromThemoviedb(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`,
  );
}

// дополнительный фетч отзывов
export function getMovieReviews(movieId) {
  return fetchFromThemoviedb(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`,
  );
}
