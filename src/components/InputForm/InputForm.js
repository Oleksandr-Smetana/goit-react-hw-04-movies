import { useState } from 'react';
import { useLocation, useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

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
      return toast.warn('Please enter your query!');
    }

    onSubmit(movieQuery);
    setMovieQuery('');
    history.push({
      ...location,
      search: `query=${movieQuery}`,
    });
  };

  return (
    <form onSubmit={handleSubmitButton}>
      <input
        // className="input"
        value={movieQuery}
        onChange={onInputChange}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />

      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
}

InputForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
