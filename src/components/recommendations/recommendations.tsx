import React from 'react';
import { imgURL } from '../../api/init';

interface RecommendationsProps {
  keyID: any;
  name: any;
  backdrop: any;
  voteAverage: any;
}

const Recommendations: React.FC<RecommendationsProps> = ({
  keyID,
  name,
  backdrop,
  voteAverage,
}) => {
  const width: string = 'w342';
  const url: string = `${imgURL}/${width}/${backdrop}`;
  const vote: number = voteAverage * 10;
  const percentage: string = `${vote.toFixed(0)}`;

  return (
    <div key={keyID} className="details__rec">
      <figure>
        <img src={url} alt={name} />
        <figcaption>
          <strong>{name}</strong>
          <p>{percentage}%</p>
        </figcaption>
      </figure>
    </div>
  );
};
export default Recommendations;
