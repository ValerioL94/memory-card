import '../styles/Footer.css';
import { logo } from '../assets/icons/github.svg';

export default function footer() {
  return (
    <footer>
      <p>Copyright © 2024 ValerioL94</p>
      <a href="https://github.com/ValerioL94">
        <img className="logo" src={logo} alt="github logo" />
      </a>
    </footer>
  );
}
