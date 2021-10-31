import { Link } from 'react-router-dom';
import defaultPoster from '../../defaultImages/defaultPoster.jpg';

import s from './MoviesList.module.css';

export default function MoviesList({ movies }) {
  //   const location = useLocation();

  return (
    <>
      <ul className={s.list}>
        {movies &&
          movies.map(movie => (
            <li className={s.item} key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
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
