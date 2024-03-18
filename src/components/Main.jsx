import '../styles/Main.css';
import { useState } from 'react';

export default function Main() {
  const [category, setCategory] = useState('');
  return (
    <main>
      {category ? (
        <div className="cardsContainer"></div>
      ) : (
        <div className="playerChoice">
          <h1>Choose a category</h1>
          <div className="choiceWrapper">
            <div className="choice" id="sorceries">
              <h2>Sorceries</h2>
              <button type="button" onClick={() => setCategory('sorceries')}>
                <img src="images/sorceryScroll.webp" alt="sorcery scroll" />
              </button>
            </div>
            <div className="choice" id="incantations">
              <h2>Incantations</h2>
              <button type="button" onClick={() => setCategory('incantations')}>
                <img src="images/prayerBook.webp" alt="prayer book " />
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
