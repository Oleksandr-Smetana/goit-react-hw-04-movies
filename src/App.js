import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Loader from './components/Loader';
import 'react-toastify/dist/ReactToastify.css';

// import s from './App.module.css';
import AppBar from './components/AppBar';
// import MovieDetailsPage from './pages/MovieDetailsPage';

const HomePage = lazy(() =>
  import(
    './pages/HomePage'
    /* webpackChunkName: "home-page" */
  ),
);
const MoviesPage = lazy(() =>
  import(
    './pages/MoviesPage'
    /* webpackChunkName: "movies-page" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage'
    /* webpackChunkName: "movies-details-page" */
  ),
);
const NotFoundPage = lazy(() =>
  import(
    './pages/NotFoundPage'
    /* webpackChunkName: "not-found-page" */
  ),
);

export default function App() {
  return (
    <>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/movies">
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>

      <ToastContainer
        autoClose={4000}
        position="bottom-center"
        theme="colored"
      />
    </>
  );
}
