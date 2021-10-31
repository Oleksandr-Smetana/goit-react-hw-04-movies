import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../apiServises/MoviedbAPI';

import s from './Reviews.module.css';

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
      {reviews && reviews.length !== 0 ? (
        <ul className={s.reviewsList}>
          {reviews.map(review => {
            return (
              <li className={s.reviewsItem} key={review.id}>
                <h4 className={s.reviewsAuthor}>
                  Author: {review.author}
                </h4>
                <p className={s.reviewsContent}>
                  {review.content}
                </p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={s.defaultMessage}>No reviews yet.</p>
      )}
    </>
  );
}
