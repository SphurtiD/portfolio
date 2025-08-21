// /components/PixelCharacter.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import "./../styles/pixel-character.css";

export default function PixelCharacter() {
  const characterRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<"right" | "left">("right");
  const [isRolling, setIsRolling] = useState(false);
  const [position, setPosition] = useState(100); // start from 100px from left

  useEffect(() => {
    if (isRolling) return; // pause movement if rolling

    const interval = setInterval(() => {
      setPosition((prev) => {
        const newPos = direction === "right" ? prev + 2 : prev - 2;

        // Flip direction at boundaries (adjust for your layout)
        if (newPos > window.innerWidth - 150) {
          setDirection("left");
          return window.innerWidth - 150;
        }
        if (newPos < 100) {
          setDirection("right");
          return 100;
        }

        return newPos;
      });
    }, 30); // ~60fps

    return () => clearInterval(interval);
  }, [direction, isRolling]);

  const handleMouseEnter = () => {
    setIsRolling(true);
  };

  const handleMouseLeave = () => {
    setIsRolling(false);
  };

  return (
    <div
      ref={characterRef}
      className={`pixel-character ${
        isRolling ? "rolling" : direction === "right" ? "walking-right" : "walking-left"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ left: `${position}px` }}
    >
      {isRolling && <div className="speech-bubble">Heyy There!❤️</div>}
    </div>
  );
}