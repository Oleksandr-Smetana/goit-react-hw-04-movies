import { useEffect, useState, lazy, Suspense } from 'react';
import { useLocation } from 'react-router';

import Loader from '../components/Loader';
import { toast } from 'react-toastify';

import { getMoviesBySearch } from '../apiServises/MoviedbAPI';
import PageHeading from '../components/PageHeading';
import InputForm from '../components/InputForm/InputForm';

const MoviesList = lazy(() =>
  import(
    '../components/MoviesList/MoviesList'
    /* webpackChunkName: "movies-list" */
  ),
);

export default function HomeView() {
  const [inputValue, setInputValue] = useState('');
  const [searchedMovies, setSearchedMovies] =
    useState(null);
  const location = useLocation();

  useEffect(() => {
    const searchQuery = new URLSearchParams(
      location.search,
    ).get('query');

    if (searchQuery === null) {
      return;
    }

    setInputValue(searchQuery);
  }, [location]);

  useEffect(() => {
    if (!inputValue) {
      return;
    }
    // фетч фильмов по запросу
    getMoviesBySearch(inputValue).then(mowiesList => {
      if (mowiesList.results.length === 0) {
        toast.error(
          `No movies with query: "${inputValue}".`,
        );
        return;
      }
      setSearchedMovies(mowiesList.results);
    });
  }, [inputValue]);

  // запись запроса фильма в стейт
  const onSubmit = movieQuery => {
    setInputValue(movieQuery);
  };

  return (
    <>
      <PageHeading
        text={
          inputValue
            ? `Results by query: "${inputValue}"`
            : 'Please enter your query'
        }
      />
      <InputForm onSubmit={onSubmit} />

      <Suspense fallback={<Loader />}>
        <MoviesList movies={searchedMovies} />
      </Suspense>
    </>
  );
}
