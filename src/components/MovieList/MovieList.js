import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import './index.css';

import Movie from '../Movie';

const MovieList = ({ movies }) => (
  <div className="movie-list-container">
    {movies.map(movie => (
      <Movie
        key={movie.id}
        poster={movie.poster_path}
        title={movie.title}
        votes={movie.vote_average}
        popularity={movie.popularity}
      />
    ))}
  </div>
);

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
