import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import s from './App.module.css';
import Container from './components/Container';
import AppBar from './components/AppBar';
import NotFoundView from './views/NotFoundView';

export default function App() {
  return (
    <Container className={s.App}>
      <AppBar />

      <Switch>
        {/* <Route path="/" exact>
          <HomeView />
        </Route> */}

        {/* <Route path="/movies" exact>
          <MoviesView />
        </Route> */}

        {/* <Route path="/movies/:movieId">
          <MovieDetailsView />
        </Route> */}

        <Route>
          <NotFoundView />
        </Route>
      </Switch>

      <ToastContainer
        autoClose={4000}
        position="bottom-center"
        theme="colored"
      />
    </Container>
  );
}
