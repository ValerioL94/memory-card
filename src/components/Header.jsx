import '../styles/Header.css';

export default function Header() {
  return (
    <header>
      <div>
        <h1>Memory gamE</h1>
        <p>Select a different card each time to advance to the next round</p>
      </div>
      <div className="scoreTab">
        <h2>SCORE : {0}</h2>
        <h2>BEST SCORE : {0}</h2>
      </div>
    </header>
  );
}
