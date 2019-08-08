import React, { useState } from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import './index.css';

import Movie from '../Movie';
import MovieDetails from '../MovieDetails/MovieDetails';

const MovieList = ({ movies }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(null);

  const handleClick = movie => () => {
    setCurrentMovie(movie);
    setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);

  return (
    <div className="movie-list-container">
      {movies.length > 0 ? (
        movies.map(movie => (
          <Movie
            key={movie.id}
            handleClick={handleClick(movie)}
            poster={movie.poster_path}
            title={movie.title}
            rating={movie.vote_average}
            popularity={movie.popularity}
          />
        ))
      ) : (
        <span>We can't found any movie :(</span>
      )}
      <MovieDetails
        isOpen={isOpen}
        handleClose={handleClose}
        {...currentMovie}
      />
    </div>
  );
};

MovieList.propTypes = {
  movies: arrayOf(
    shape({
      poster_path: string,
      id: number,
      title: string,
      votes: number,
      popularity: number,
    })
  ),
};

export default MovieList;
