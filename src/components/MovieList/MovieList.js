import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import './index.css';

import Movie from '../Movie';

const MovieList = ({ movies }) => (
  <div className="movie-list-container">
    {movies.length > 0 ? (
      movies.map(movie => (
        <Movie
          key={movie.id}
          poster={movie.poster_path}
          title={movie.title}
          rating={movie.vote_average}
          popularity={movie.popularity}
        />
      ))
    ) : (
      <span>We can't found any movie :(</span>
    )}
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
