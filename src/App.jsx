import React, { useEffect, useState } from 'react';
import Tile from './Tile.jsx';
import { nanoid } from 'nanoid';
import './index.css';
import _ from 'lodash';
const App = () => {
  const [currentTile, setCurrentTile] = useState(null);

  let emojis = ['❤️', '✨', '🥺'];
  const shuffleEmoji = () => {
    emojis = _.shuffle(emojis);
  };

  useEffect(() => {
    console.log('current tile ', currentTile);
  }, [currentTile]);
  const renderEmojiRow = () => {
    // shuffleEmoji();
    return emojis.map((emojiEl) => (
      <Tile
        key={nanoid()}
        id={nanoid()}
        setCurrentTile={(emoji) => setCurrentTile(emoji)}
        emoji={emojiEl}
      />
    ));
  };
  return (
    <>
      <h1>Hello world</h1>
      {renderEmojiRow()}
      <br />
      {renderEmojiRow()}
    </>
  );
};

export default App;
