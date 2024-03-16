import '../styles/Footer.css';
import './AudioPlayer.jsx';
import AudioPlayer from './AudioPlayer.jsx';
export default function footer() {
  return (
    <footer>
      <AudioPlayer />
      <div className="about">
        <p>Copyright © 2024 ValerioL94</p>
        <a href="https://github.com/ValerioL94">
          <img
            className="logo"
            src="/icons/github-mark.png"
            alt="github logo"
          />
        </a>
      </div>
    </footer>
  );
}
