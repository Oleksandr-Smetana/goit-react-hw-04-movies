import {
  Link,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';

export default function MovieInfo({ movieInfo }) {
  const { url } = useRouteMatch();
  const history = useHistory();

  const onGoBack = () => {
    const pathName = history.location.pathname;
    if (
      pathName.includes('cast') ||
      pathName.includes('reviews')
    ) {
      history.go(-1);
    }
    history.goBack();
  };

  return (
    <>
      <button type="button" onClick={onGoBack}>
        Go back
      </button>
      {movieInfo && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`}
            loading="lazy"
            alt={movieInfo.title}
          />
          <div>
            <h2>{movieInfo.title}</h2>
            <p>
              Genres:{' '}
              {movieInfo.genres
                .map(({ name }) => name)
                .join(', ')}
            </p>
            <p>Movie rating: {movieInfo.vote_average}</p>
            <p>{movieInfo.overview}</p>
          </div>
        </div>
      )}
      <hr />
      <h3>Additional information:</h3>
      <ul>
        <li>
          <Link to={`${url}/cast`}>
            <h4>Cast</h4>
          </Link>
        </li>
        <li>
          <Link to={`${url}/reviews`}>
            <h4>Reviews</h4>
          </Link>
        </li>
      </ul>
    </>
  );
}
