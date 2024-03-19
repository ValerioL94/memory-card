import '../styles/Game.css';
import { useState, useEffect } from 'react';

const getRequest = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }
  return response.json();
};
const Game = ({ category }) => {
  const [spells, setSpells] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
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
          <div className={'card' + ' ' + category} key={spell.id}>
            <img src={spell.image} alt={spell.name} height={200} width={200} />
            <h2>{spell.name.toUpperCase()}</h2>
          </div>
        ))}
    </div>
  );
};

export default Game;
