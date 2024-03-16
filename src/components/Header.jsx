import '../styles/Header.css';

export default function Header() {
  return (
    <header>
      <div>
        <h1>Memo Ring</h1>
        <p>
          Rules are simple: select a different spell each time to advance to the
          next round.
        </p>
      </div>
      <div>
        <h2>Score: {0}</h2>
        <h2>Best score: {0}</h2>
      </div>
    </header>
  );
}
