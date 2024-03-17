import '../styles/AudioPlayer.css';
import { useState, useEffect } from 'react';
import ost from '/audio/01.Elden Ring.mp3';

const music = new Audio(ost);

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    isPlaying && music.play();
    return () => {
      music.pause();
    };
  }, [isPlaying]);

  useEffect(() => {
    isPlaying &&
      music.addEventListener('ended', () => {
        music.play();
        return () => {
          music.pause();
        };
      });
  }, [isPlaying]);
  return (
    <button
      id="audioBtn"
      className={isPlaying ? 'pulse' : ''}
      type="button"
      onClick={() => setIsPlaying(!isPlaying)}
    >
      <span></span>
      <img
        className="playPause"
        src={isPlaying ? '/icons/pause.png' : '/icons/play.png'}
        alt="play pause button"
      />
    </button>
  );
}
