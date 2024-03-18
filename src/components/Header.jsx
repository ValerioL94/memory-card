import '../styles/Header.css';
import { useState } from 'react';
export default function Header() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return (
    <header>
      <div>
        <h1>Memory gamE</h1>
        <p>Select a different card each time to advance to the next round</p>
      </div>
      <div className="scoreTab">
        <h2>SCORE : {currentScore}</h2>
        <h2>BEST SCORE : {bestScore}</h2>
      </div>
    </header>
  );
}
