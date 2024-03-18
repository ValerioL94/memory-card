import '../styles/Main.css';
import Fetch from './Fetch';
import { useState } from 'react';

export default function Main() {
  const [category, setCategory] = useState('');

  return (
    <main>
      {category ? (
        <div className="cardsContainer">
          <Fetch category={category} />
        </div>
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
