import { useState } from 'react';

import './App.css';
import EmojiList from './EmojiList';
import Winner from './Winner';
import Button from './Button';

function App() {

  const [emojis, setEmojis] = useState([
    {
      imageCode: '\u{1F493}',
      id: crypto.randomUUID(),
      count: 0,
    },
    {
      imageCode: '\u{1F44D}',
      id: crypto.randomUUID(),
      count: 0,

    },
    {
      imageCode: '\u{1F44E}',
      id: crypto.randomUUID(),
      count: 0,
    },
    {
      imageCode: '\u{1F44F}',
      id: crypto.randomUUID(),
      count: 0
    },
    {
      imageCode: '\u{1F602}',
      id: crypto.randomUUID(),
      count: 0
    },
  ]);

  const [show, setShow] = useState(false);

  const incrementCount = (emojiID) => {
    setEmojis((prevEmojii) =>
      prevEmojii.map(emoji =>
        emojiID === emoji.id ? { ...emoji, count: emoji.count + 1 } : emoji
      )
    );
  };

  const handleShowToggle = () => {
    setShow((prevState) => !prevState);
  }

    return (
      <>
        <div className="parent">
          <EmojiList emojis={emojis} incrementCount={incrementCount} />
        </div>

        <div className="resultcontainer">
          <Button onClick={handleShowToggle}>{show?'hide':'show'}</Button>
          {show && <Winner items={emojis.slice().sort((a, b) => b.count - a.count)} />}
        </div>
      </>
    )
  }

export default App;
