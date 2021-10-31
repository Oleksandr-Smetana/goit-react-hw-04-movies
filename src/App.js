import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Loader from './components/Loader';
import 'react-toastify/dist/ReactToastify.css';

import s from './App.module.css';
import AppBar from './components/AppBar';
import HomePage from './pages/HomePage';

// const HomePage = lazy(() =>
//   import(
//     './pages/HomePage'
//     /* webpackChunkName: "home-page" */
//   ),
// );
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
    <div className={s.App}>
      <AppBar />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/movies">
          <Suspense fallback={<Loader />}>
            <MoviesPage />
          </Suspense>
        </Route>

        <Route path="/movies/:movieId">
          <Suspense fallback={<Loader />}>
            <MovieDetailsPage />
          </Suspense>
        </Route>

        <Route>
          <Suspense fallback={<Loader />}>
            <NotFoundPage />
          </Suspense>
        </Route>
      </Switch>

      <ToastContainer
        autoClose={4000}
        position="bottom-center"
        theme="colored"
      />
    </div>
  );
}
