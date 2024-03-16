import '../styles/AudioPlayer.css';
import { useState, useEffect } from 'react';
import ost from '/audio/01.Elden Ring.mp3';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const music = new Audio(ost);
    isPlaying && music.play();
    return () => {
      music.pause();
    };
  }, [isPlaying]);

  return (
    <button type="button" onClick={() => setIsPlaying(!isPlaying)}>
      {isPlaying ? 'Pause' : 'Play'}
    </button>
  );
}
