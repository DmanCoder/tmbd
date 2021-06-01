import gsap from 'gsap';
import React from 'react';

// Types
import { IRatingProps } from './ratingTypes';

// Helpers
import handleSetColor from './helpers/handleSetColor';

const Rating: React.FC<IRatingProps> = ({ score }) => {
  const rating = React.useRef(null);

  React.useEffect(() => {
    // Return dynamic color
    const dColor = handleSetColor(score);

    gsap.to(rating.current, {
      duration: 0.35,
      stroke: dColor,
      strokeDasharray: `${score}, 100`,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <svg
      data-test="rating-component"
      viewBox="0 0 36 36"
      className="rating"
      ref={rating}
    >
      <path
        className="rating__circle-bg"
        strokeDasharray="100, 100"
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path
        className="rating__circle"
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className="rating__percentage">
        <tspan>{score}</tspan>
        <tspan dy="-4">%</tspan>
      </text>
    </svg>
  );
};

export default Rating;
