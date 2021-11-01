import { useEffect, useState, lazy, Suspense } from 'react';
import {
  useRouteMatch,
  useLocation,
  useHistory,
} from 'react-router-dom';

import Loader from '../components/Loader';

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
  const [searchedMovies, setSearchedMovies] =
    useState(null);
  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  const searchQuery =
    new URLSearchParams(location.search).get('query') ?? '';

  useEffect(() => {
    searchQuery &&
      getMoviesBySearch(searchQuery).then(mowiesList => {
        setSearchedMovies(mowiesList.results);
        mowiesList.results.length === 0 &&
          history.push({ ...location, search: '' });
      });
  }, [history, location, searchQuery]);

  // запись запроса в свойство search location
  const onSubmit = movieQuery => {
    movieQuery &&
      history.push({
        ...location,
        search: `query=${movieQuery}`,
      });
  };

  return (
    <>
      <PageHeading
        text={
          searchedMovies
            ? searchedMovies.length !== 0
              ? `Results by query: "${searchQuery}"`
              : 'There are no results for your query.'
            : 'Please enter your query.'
        }
      />
      <InputForm onSubmit={onSubmit} />
      {searchedMovies && searchedMovies.length !== 0 && (
        <Suspense fallback={<Loader />}>
          <MoviesList
            movies={searchedMovies}
            url={url}
            location={location}
          />
        </Suspense>
      )}
    </>
  );
}
