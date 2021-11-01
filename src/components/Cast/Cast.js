import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getMovieCast } from '../../apiServises/MoviedbAPI';

import defaultImages from '../../defaultImages/defaultPhoto.jpg';
import s from './Cast.module.css';

export default function MovieCast({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getMovieCast(movieId).then(response =>
      setCast(response.cast),
    );
  }, [movieId]);

  // console.log(cast);
  return cast && cast.length !== 0 ? (
    <ul className={s.cast}>
      {cast.map(actor => {
        return (
          <li className={s.castItem} key={actor.id}>
            <img
              className={s.photo}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                  : defaultImages
              }
              alt={actor.name}
            />
            <p className={s.castInfo}>
              Actor: {actor.name}
              <br />
              Character: {actor.character}
            </p>
          </li>
        );
      })}
    </ul>
  ) : (
    <p className={s.defaultMessage}>
      Cast is not available.
    </p>
  );
}

MovieCast.propTypes = {
  movieId: PropTypes.string.isRequired,
};
