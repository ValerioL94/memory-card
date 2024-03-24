import '../styles/Header.css';
import PropTypes from 'prop-types';

function Header({ score, bestScore }) {
  return (
    <header>
      <div>
        <h1>Memory gamE</h1>
        <p>Select a different card each time to advance to the next round</p>
      </div>
      <div className="scoreTab">
        <h2>SCORE : {score}</h2>
        <h2>BEST SCORE : {bestScore}</h2>
      </div>
    </header>
  );
}

Header.propTypes = {
  score: PropTypes.number,
  bestScore: PropTypes.number,
};

export default Header;
