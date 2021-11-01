import { useState } from 'react';
import { useLocation, useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import s from './InputForm.module.css';

export default function InputForm({ onSubmit }) {
  const [movieQuery, setMovieQuery] = useState('');
  const location = useLocation();
  const history = useHistory();

  // запись нормализированного запроса в стейт movieQuery
  const onInputChange = e => {
    setMovieQuery(e.currentTarget.value.toLowerCase());
  };

  // передача в MoviesView строки movieQuery и сброс стейта
  const handleSubmitButton = e => {
    e.preventDefault();

    if (movieQuery.trim() === '') {
      return toast.warn(
        'Please type at least one character!',
      );
    }

    onSubmit(movieQuery);
    setMovieQuery('');
    history.push({
      ...location,
      search: `query=${movieQuery}`,
    });
  };

  return (
    <div className={s.formWrapper}>
      <form
        className={s.form}
        onSubmit={handleSubmitButton}
      >
        <input
          className={s.input}
          value={movieQuery}
          onChange={onInputChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />

        <button className={s.button} type="submit">
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}

InputForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
