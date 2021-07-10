import React, { useState } from 'react';
const Tile = ({ emoji, id, setCurrentTile, currentTile }) => {
  const handleClick = () => {
    setCurrentTile(id);
  };
  return (
    <div
      onClick={handleClick}
      className={`tile ${!currentTile === id ? 'hidden' : null}`}
    >
      {emoji}
    </div>
  );
};

export default Tile;
