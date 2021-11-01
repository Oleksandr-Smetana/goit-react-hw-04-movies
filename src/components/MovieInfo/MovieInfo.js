import { useState, useEffect } from 'react';
import {
  Link,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import defaultPoster from '../../defaultImages/defaultPoster.jpg';
import s from './MovieInfo.module.css';

export default function MovieInfo({ movieInfo }) {
  const [locationState, setLocationState] = useState(null);
  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location && location.state && location.state.from) {
      !Object.keys(location.state.from).includes(
        'locationState',
      ) &&
        setLocationState(prevLocationState => ({
          ...prevLocationState,
          ...location.state.from,
        }));
    }
  }, [location]);

  // переход на предыдущую страницу при клике на кнопку "Go back"
  const onGoBack = () => {
    locationState
      ? history.push(locationState)
      : history.push('/');
  };

  return (
    <>
      <button
        className={s.button}
        type="button"
        onClick={onGoBack}
      >
        &#8678; Go back
      </button>
      {movieInfo && (
        <div className={s.mainWrapper}>
          <img
            className={s.poster}
            src={
              movieInfo.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`
                : defaultPoster
            }
            loading="lazy"
            alt={movieInfo.title}
          />
          <div className={s.mainInfo}>
            <h2 className={s.title}>{movieInfo.title}</h2>
            <p className={s.genres}>
              Genres:{' '}
              {movieInfo.genres
                .map(({ name }) => name)
                .join(', ')}
            </p>
            <p className={s.rating}>
              Movie rating: {movieInfo.vote_average}
            </p>
            <p className={s.overview}>
              {movieInfo.overview}
            </p>
          </div>
        </div>
      )}
      <div className={s.addWrapper}>
        <h3 className={s.addInfo}>
          Additional information:
        </h3>
        <ul className={s.addLinks}>
          <li className={s.addItem}>
            <Link to={`${url}/cast`}>
              <h4>Cast</h4>
            </Link>
          </li>
          <li className={s.addItem}>
            <Link to={`${url}/reviews`}>
              <h4>Reviews</h4>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

MovieInfo.propTypes = {
  movieDetails: PropTypes.func,
};
