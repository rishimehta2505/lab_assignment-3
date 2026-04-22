import React from "react";

function Heading() {
  return (
    <div className="flex max-w-5xl mx-auto justify-between items-end py-8 mb-8 border-b-2 border-white/10">
      <div className="flex flex-col">
        <h1 className="text-6xl font-black tracking-tighter italic">
          <span className="text-white drop-shadow-md">STUDENT</span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-shadow-lg">
            SCOREBOARD
          </span>
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-transparent mt-2 rounded-full"></div>
      </div>

      <div className="hidden md:block">
        <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-mono text-slate-400 uppercase tracking-widest">
          Academic Year 2025-2026
        </span>
      </div>
    </div>
  );
}

export default Heading;