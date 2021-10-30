import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../apiServises/MoviedbAPI';

export default function MovieReviews({ movieId }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId).then(response =>
      setReviews(response.results),
    );
  }, [movieId]);

  console.log(reviews);
  return (
    <>
      {reviews && (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h4>Author: {review.author}</h4>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
