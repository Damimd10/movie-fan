import React from 'react';
import { bool, func, number, string } from 'prop-types';
import Modal from 'react-modal';
import { IMAGE_BASE_URL } from '../../constants';
import './index.css';

const customStyles = {
  content: {
    minWidth: '800px',
    height: '550px',
  },
};

const MovieDetails = ({
  isOpen,
  handleClose,
  overview,
  popularity,
  poster_path,
  title,
  vote_count,
}) => (
  <Modal isOpen={isOpen} style={customStyles} shouldCloseOnOverlayClick>
    <section className="movie-details-container">
      <img alt="Poster" src={`${IMAGE_BASE_URL}/${poster_path}`} />
      <div className="movie-details-bio">
        <span className="movie-info">{`Title: ${title}`}</span>
        <span className="movie-info">{`Popularity: ${popularity}`}</span>
        <span className="movie-info">{`Vote Count: ${vote_count}`}</span>
        <div className="overview-details">{overview}</div>
        <button className="button-back" onClick={handleClose}>
          Back to Movies
        </button>
      </div>
    </section>
  </Modal>
);

MovieDetails.propTypes = {
  isOpen: bool.isRequired,
  handleClose: func.isRequired,
  overview: string,
  popularity: number,
  poster_path: string,
  title: string,
  vote_count: number,
};

export default MovieDetails;
