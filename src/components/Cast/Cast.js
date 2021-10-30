import { useEffect, useState } from 'react';
import { getMovieCast } from '../../apiServises/MoviedbAPI';

export default function MovieCast({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getMovieCast(movieId).then(response =>
      setCast(response.cast),
    );
  }, [movieId]);

  console.log(cast);
  return (
    <>
      {cast &&
        cast.map(actor => {
          return (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                alt={actor.name}
              />
              <p>Actor: {actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          );
        })}
    </>
  );
}
