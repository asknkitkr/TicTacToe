import React from 'react';

const Square = ({ value, onClick, isWinningSqaure }) => {
  return (
    <button
      type="button"
      className={`square ${isWinningSqaure ? 'winning' : ''} ${
        value === 'X' ? 'text-green' : 'text-orange'
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
