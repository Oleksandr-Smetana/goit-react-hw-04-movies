import { useEffect, useState } from 'react';

import { getTrendingMovies } from '../apiServises/MoviedbAPI';
import PageHeading from '../components/PageHeading';
import MoviesList from '../components/MoviesList/MoviesList';

export default function HomeView() {
  const [trendingMovies, setTrendingMovies] =
    useState(null);

  useEffect(() => {
    // фетч популярных фильмов за неделю
    getTrendingMovies().then(mowiesList =>
      setTrendingMovies(mowiesList.results),
    );
  }, []);

  // console.log(trendingMovies);
  return (
    <>
      <PageHeading text="Popular movies this week" />
      <MoviesList movies={trendingMovies} />
    </>
  );
}
