import '../styles/Game.css';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const getRequest = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }
  return response.json();
};
const Game = ({
  category,
  setCategory,
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
  const [flip, setFlip] = useState(true);

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

  function handleKeyUp(e) {
    if (e.key === 'Enter') {
      playRound(e);
    }
  }
  function playRound(e) {
    let item = e.target.closest('div');
    if (selectedCards.includes(item.id)) return setIsGameOver(true);
    setSelectedCards([...selectedCards, item.id]);
    setCurrentScore((score) => score + 1);
    item.blur();
    setFlip(false);
    setTimeout(() => {
      setFlip(true);
      shuffleCards();
    }, 100);
  }
  function shuffleCards() {
    let shuffled = spells
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    setSpells(shuffled);
  }
  function resetGame() {
    setCategory('');
    setCurrentScore(0);
  }

  useEffect(() => {
    spells && currentScore > bestScore && setBestScore(currentScore);
    spells && spells.length === selectedCards.length && setIsGameOver(true);
  }, [selectedCards.length, spells, currentScore, bestScore, setBestScore]);

  return gameOver ? (
    <div className="gameOver">
      <h1 style={{ wordSpacing: '5px' }}>
        {currentScore < 12
          ? 'TARNISHED, YOU CAN DO BETTER THAN THAT!'
          : 'WELL DONE TARNISHED, YOU GOT A PERFECT SCORE!'}
      </h1>
      <h2>If you want to play again you can use the grace below </h2>
      <button onClick={resetGame} type="button">
        Reset
      </button>
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
          <div className="cardOuter" key={spell.id}>
            <div className={flip ? 'cardInner flip' : 'cardInner'}>
              <div
                tabIndex={0}
                id={spell.id}
                className={`card front ${category}`}
                onKeyUp={handleKeyUp}
                onMouseUp={playRound}
              >
                <img
                  src={spell.image}
                  alt={spell.name}
                  height={200}
                  width={200}
                />
                <h2>{spell.name.toUpperCase()}</h2>
              </div>
              <div className={`card back ${category}`}></div>
            </div>
          </div>
        ))}
    </div>
  );
};

Game.propTypes = {
  category: PropTypes.string,
  setCategory: PropTypes.string,
  currentScore: PropTypes.number,
  setCurrentScore: PropTypes.number,
  bestScore: PropTypes.number,
  setBestScore: PropTypes.number,
};

export default Game;
