import { useEffect, useState, lazy, Suspense } from 'react';
import {
  Route,
  useParams,
  useRouteMatch,
} from 'react-router-dom';

import { getMovieDetails } from '../apiServises/MoviedbAPI';

import Loader from '../components/Loader';
import PageHeading from '../components/PageHeading';
import MovieInfo from '../components/MovieInfo';

const Cast = lazy(() =>
  import(
    '../components/Cast'
    /* webpackChunkName: "cast" */
  ),
);
const Reviews = lazy(() =>
  import(
    '../components/Reviews'
    /* webpackChunkName: "reviews" */
  ),
);

export default function MovieDetailsView() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const { path } = useRouteMatch();

  useEffect(() => {
    getMovieDetails(movieId).then(setMovieDetails);
  }, [movieId]);

  return (
    <>
      {movieDetails && (
        <PageHeading text={'Movie details'} />
      )}

      <Route path={`${path}`}>
        <MovieInfo movieInfo={movieDetails} />
      </Route>

      <Suspense fallback={<Loader />}>
        <Route path={`${path}/cast`}>
          <Cast movieId={movieId} />
        </Route>

        <Route path={`${path}/reviews`}>
          <Reviews movieId={movieId} />
        </Route>
      </Suspense>
    </>
  );
}
