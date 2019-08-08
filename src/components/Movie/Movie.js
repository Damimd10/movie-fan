import React from 'react';
import { func, number, string } from 'prop-types';
import { IMAGE_BASE_URL } from '../../constants';
import './index.css';

const Movie = ({ handleClick, popularity, poster, title, rating }) => (
  <section className="movie-container" onClick={handleClick}>
    {poster ? (
      <img src={`${IMAGE_BASE_URL}/${poster}`} alt="Poster" />
    ) : (
      <div className="none-poster">Pending Poster, Sorry!</div>
    )}
    <div>{title}</div>
    <div>{`Votes: ${rating}`}</div>
    <div>{`Rating: ${popularity}`}</div>
  </section>
);

Movie.propTypes = {
  handleClick: func.isRequired,
  popularity: number,
  poster: string,
  title: string.isRequired,
  rating: number.isRequired,
};

export default Movie;
