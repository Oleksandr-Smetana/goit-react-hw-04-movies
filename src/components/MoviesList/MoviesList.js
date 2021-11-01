import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import defaultPoster from '../../defaultImages/defaultPoster.jpg';
import s from './MoviesList.module.css';

export default function MoviesList({
  movies,
  url,
  location,
}) {
  return (
    <>
      <ul className={s.list}>
        {movies &&
          movies.map(movie => (
            <li className={s.item} key={movie.id}>
              <Link
                to={{
                  pathname: `${url}/${movie.id}`,
                  state: { from: location },
                }}
              >
                <img
                  className={s.itemImage}
                  src={
                    movie.poster_path
                      ? `https://www.themoviedb.org/t/p/w300${movie.poster_path}`
                      : defaultPoster
                  }
                  alt={movie.title}
                />
                <h4 className={s.itemTitle}>
                  {movie.title}
                </h4>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array,
  url: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
};
