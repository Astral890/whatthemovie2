import React from 'react';

const PointsCounter = ({ points }) => {
  return (
    <div className="points-counter">
      <p>Puntos: {points}</p>
    </div>
  );
};

export default PointsCounter;