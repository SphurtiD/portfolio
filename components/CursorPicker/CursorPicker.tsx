// components/CursorPicker.tsx
"use client";

import { useState } from "react";

const cursors = {
  bear: "/mouse/bear.cur",
  bow: "/mouse/bow.cur",
  mushroom: "/mouse/mushroom.cur",
} as const;

type CursorType = keyof typeof cursors;

export function CursorPicker() {
  const [hovered, setHovered] = useState(false);

  const setCursor = (cursor: CursorType) => {
    document.body.style.cursor = `url(${cursors[cursor]}) 16 16, auto`;
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed top-30 right-4 z-50 transition-all duration-300"
    >
      {/* Outer glow gradient wrapper */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-[2px] rounded-full hover:shadow-[0_0_20px_#a855f7] transition duration-300 w-fit">
        {/* Inner dark theme bubble */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full px-6 py-4 transition duration-300 hover:shadow-[0_0_15px_#a855f7] group">
          <div className="flex items-center gap-2">
            <span className="text-sm text-white">Customize Your Cursor✨</span>
            <div
              className={`flex gap-2 overflow-hidden transition-all duration-300 ${
                hovered ? "w-40 opacity-100" : "w-0 opacity-0"
              }`}
            >
              {(Object.keys(cursors) as CursorType[]).map((name) => (
                <button
                  key={name}
                  onClick={() => setCursor(name)}
                  title={name}
                  className="hover:scale-110 transition-transform"
                >
                  <img src={cursors[name]} alt={name} className="w-6 h-6" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
