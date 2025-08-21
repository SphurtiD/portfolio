"use client";

import { useEffect, useRef, useState } from "react";
import { FaMusic } from "react-icons/fa";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Optional: auto-play when user interacts
  useEffect(() => {
    const handleUserGesture = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    };
    window.addEventListener("click", handleUserGesture, { once: true });
    return () => window.removeEventListener("click", handleUserGesture);
  }, []);

  return (
    <>
      <div
        onClick={togglePlay}
        title={isPlaying ? "Pause Music" : "Play Music"}
        className={`fixed bottom-4 right-4 z-50 cursor-pointer p-3 rounded-full border border-purple-500 bg-black/60 transition-transform ${
          isPlaying ? "animate-spin-slow" : ""
        }`}
      >
        <FaMusic size={20} className="text-purple-500" />
      </div>
      <audio ref={audioRef} src="/audio/mars.mp3" loop />
    </>
  );
}
