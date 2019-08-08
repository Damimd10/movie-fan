import React, { useState } from 'react';
import { func, number } from 'prop-types';
import './index.css';

import Rating from '../Rating';

const SearchBar = ({ searchMovie, stars, whenFilterChange }) => {
  const [movieName, setMovieName] = useState('');

  const handleMovieChange = event => setMovieName(event.target.value);

  return (
    <section className="search-container">
      <div className="search-group">
        <input
          className="search-input inactive"
          type="text"
          placeholder="I'm looking for..."
          onChange={handleMovieChange}
        />
        <button
          className="button button-brand-primary button-search"
          type="button"
          onClick={() => searchMovie(movieName)}
        >
          Search
        </button>
      </div>
      <Rating onChange={whenFilterChange} selectedStars={stars} />
    </section>
  );
};

SearchBar.propTypes = {
  searchMovie: func.isRequired,
  stars: number.isRequired,
  whenFilterChange: func.isRequired,
};

export default SearchBar;
