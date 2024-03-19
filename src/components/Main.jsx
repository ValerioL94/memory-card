import '../styles/Main.css';
import Game from './Game';
import { useState } from 'react';

export default function Main({
  currentScore,
  setCurrentScore,
  bestScore,
  setBestScore,
}) {
  const [category, setCategory] = useState('');

  return (
    <main>
      {category ? (
        <Game
          category={category}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          bestScore={bestScore}
          setBestScore={setBestScore}
        />
      ) : (
        <div className="playerChoice">
          <h1>CHOOSE A CATEGORY</h1>
          <div className="choiceWrapper">
            <div className="choice sorceries">
              <button type="button" onClick={() => setCategory('sorceries')}>
                <img src="images/sorceryScroll.webp" alt="sorcery scroll" />
              </button>
              <h2>SORCERIES</h2>
            </div>
            <div className="choice incantations">
              <button type="button" onClick={() => setCategory('incantations')}>
                <img src="images/prayerBook.webp" alt="prayer book " />
              </button>
              <h2>INCANTATIONS</h2>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
