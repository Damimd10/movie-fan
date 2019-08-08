import React from 'react';
import { func, number } from 'prop-types';

import Star from '../Star';

const Rating = ({ onChange, selectedStars }) => {
  const stars = Array(5)
    .fill()
    .map((_, i) => i + 1);

  return stars.map((_, i) => (
    <Star
      key={i}
      index={i}
      handleClick={onChange}
      isFilled={i < selectedStars}
    />
  ));
};

Rating.propTypes = {
  onChange: func.isRequired,
  selectedStars: number.isRequired,
};

export default Rating;
