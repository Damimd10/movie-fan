import React from 'react';
import { bool, func, number } from 'prop-types';
import './index.css';

const Star = ({ index, isFilled, handleClick }) => (
  <span
    className={`star ${isFilled ? 'active' : 'inactive'}`}
    onClick={() => handleClick(index + 1)}
  >
    {isFilled ? '★' : '☆'}
  </span>
);

Star.propTypes = {
  index: number.isRequired,
  isFilled: bool.isRequired,
  handleClick: func.isRequired,
};

export default Star;
