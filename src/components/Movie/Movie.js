import React from 'react';
import { number, string } from 'prop-types';
import './index.css';

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/w342';

const Movie = ({ popularity, poster, title, votes }) => (
  <section className="movie-container">
    {poster ? (
      <img src={`${IMAGE_BASE_URL}/${poster}`} alt="Poster" />
    ) : (
      <div className="none-poster">Pending Poster, Sorry!</div>
    )}
    <div>{title}</div>
    <div>{`Votes: ${votes}`}</div>
    <div>{`Popularity: ${popularity}`}</div>
  </section>
);

Movie.propTypes = {
  popularity: number,
  poster: string,
  title: string.isRequired,
  votes: number.isRequired,
};

export default Movie;
