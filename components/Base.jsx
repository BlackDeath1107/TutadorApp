"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Base = () => {
  const [position, setPosition] = useState({ top: "0px", left: "0px" });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleHover = () => {
    const randomX =
      Math.floor(Math.random() * window.innerWidth * 0.7) *
      (Math.random() > 0.5 ? 1 : -1);
    const randomY =
      Math.floor(Math.random() * window.innerHeight * 0.7) *
      (Math.random() > 0.5 ? 1 : -1);
    setPosition({ top: `${randomY}px`, left: `${randomX}px` });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-700 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-500/20 animate-pulse"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 8 + 3}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="pt-32 relative z-10">
        <div className="flex flex-col items-center justify-center px-4">
          <h1
            className={`text-8xl font-bold text-white text-center mb-2 transform transition-all duration-1000 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            } drop-shadow-[0_0_15px_rgba(103,232,249,0.6)]`}
          >
            HEY THERE
          </h1>

          <h1
            className={`text-8xl font-bold text-cyan-300 text-center mb-8 transform transition-all duration-1000 delay-300 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            } drop-shadow-[0_0_20px_rgba(103,232,249,0.8)]`}
          >
            WELCOME!
          </h1>

          <h1
            className={`text-3xl text-cyan-50 max-w-xl text-center  transform transition-all duration-1000 delay-500 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            Experience Education revamped with AI
          </h1>
          <h1
            className={`text-3xl text-cyan-50 max-w-xl text-center  transform transition-all duration-1000 delay-500 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            Where knowledge meets consistency
          </h1>

          <h1
            className={`text-7xl text-white mb-12 transform transition-all duration-1000 delay-700 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <span className="font-bold text-cyan-300">TUT</span>ADOR
          </h1>

          <div
            className={`relative w-full max-w-2xl h-fit py-16 bg-cyan-900/40 backdrop-blur-sm rounded-lg flex flex-row items-center justify-center mt-4 gap-10 border border-cyan-500/30 transform transition-all duration-1000 delay-1000 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <Link
              href="/login"
              className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-5 px-10 rounded-md transform transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(8,145,178,0.6)] relative overflow-hidden group"
            >
              <span className="relative z-10">ATYPICAL</span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>

            <button
              className="bg-cyan-600 text-white font-semibold py-5 px-10 rounded-md transform transition-all duration-500 hover:scale-110 hover:shadow-[0_0_25px_rgba(8,145,178,0.6)] relative overflow-hidden group"
              style={{
                transform: `translate(${position.left}, ${position.top})`,
              }}
              onMouseEnter={handleHover}
            >
              <span className="relative z-10">TYPICAL</span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Base;
