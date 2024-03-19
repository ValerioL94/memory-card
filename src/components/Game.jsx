import '../styles/Game.css';
import { useState, useEffect } from 'react';

const getRequest = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }
  return response.json();
};
const Game = ({
  category,
  currentScore,
  setCurrentScore,
  bestScore,
  setBestScore,
}) => {
  const [spells, setSpells] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [gameOver, setIsGameOver] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const spellsData = await getRequest(
          'https://eldenring.fanapis.com/api/' + category + '?limit=12'
        );
        setSpells(spellsData.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setSpells(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [category]);

  function playRound(e) {
    let item = e.target.closest('div');
    if (selectedCards.includes(item.id)) return setIsGameOver(true);
    setSelectedCards([...selectedCards, item.id]);
    setCurrentScore((score) => score + 1);
  }

  useEffect(() => {
    spells && currentScore > bestScore && setBestScore(currentScore);
    spells && spells.length === selectedCards.length && setIsGameOver(true);
  }, [selectedCards.length, spells, currentScore, bestScore, setBestScore]);

  return gameOver ? (
    <div className="gameOver">
      <h1>
        {currentScore < 12
          ? 'TARNISHED, YOU CAN DO BETTER THAN THAT!'
          : 'WELL DONE TARNISHED, YOU GOT A PERFECT SCORE!'}
      </h1>
      <h2>If you want to play again you can use the grace below </h2>
      <button type="button">Reset</button>
    </div>
  ) : (
    <div className="cardsContainer">
      {loading && (
        <div className="loading">
          <h1>LOADING...</h1>
        </div>
      )}
      {error && (
        <div className="error">
          <h1>{error}</h1>
        </div>
      )}
      {spells &&
        spells.map((spell) => (
          <div
            id={spell.id}
            className={'card' + ' ' + category}
            key={spell.id}
            onClick={playRound}
          >
            <img src={spell.image} alt={spell.name} height={200} width={200} />
            <h2>{spell.name.toUpperCase()}</h2>
          </div>
        ))}
    </div>
  );
};

export default Game;
