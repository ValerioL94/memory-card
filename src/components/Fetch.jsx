import { useState, useEffect } from 'react';

const Fetch = ({ category, limit }) => {
  const [spells, setSpells] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://eldenring.fanapis.com/api/' + category + '?limit=' + limit
        );
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let spellsData = await response.json();
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
  }, [category, limit]);
  return (
    <>
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
          <div className={'card' + ' ' + category} key={spell.id} tabIndex={0}>
            <img src={spell.image} alt={spell.name} height={200} width={200} />
            <h2>{spell.name.toUpperCase()}</h2>
          </div>
        ))}
    </>
  );
};

export default Fetch;
