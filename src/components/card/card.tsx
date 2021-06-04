import React from 'react';

interface CardProps {
  key: number
  name: string;
}

const Card: React.FC<CardProps> = ({ key, name }) => {
  return (
    <div key={key} className="card">
      <figure>
        <img src="" alt="" />
        <figcaption>{name}</figcaption>
      </figure>
    </div>
  );
};
export default Card;
