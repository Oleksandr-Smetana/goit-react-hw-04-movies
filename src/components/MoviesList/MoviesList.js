import { Link } from 'react-router-dom';

// import styles from './MoviesList.module.css';

export default function MoviesList({ movies }) {
  //   const location = useLocation();

  return (
    <>
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={`https://www.themoviedb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                />
                <h3>{movie.title}</h3>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
