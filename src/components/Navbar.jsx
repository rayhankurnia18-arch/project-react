import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-lg">

      <div className="flex justify-center gap-10 py-4 text-white">

        <Link
          to="/"
          className={`transition duration-300 ${
            location.pathname === "/"
              ? "text-blue-400 scale-110"
              : "hover:text-blue-400"
          }`}
        >
          Home
        </Link>

        <Link
          to="/Rayhan"
          className={`transition duration-300 ${
            location.pathname === "/Rayhan"
              ? "text-purple-400 scale-110"
              : "hover:text-purple-400"
          }`}
        >
          Rayhan
        </Link>

        <Link
          to="/Pandu"
          className={`transition duration-300 ${
            location.pathname === "/Pandu"
              ? "text-purple-400 scale-110"
              : "hover:text-purple-400"
          }`}
        >
          Pandu
        </Link>

        <Link
          to="/Jordan"
          className={`transition duration-300 ${
            location.pathname === "/Jordan"
              ? "text-pink-400 scale-110"
              : "hover:text-pink-400"
          }`}
        >
          Jordan
        </Link>

      </div>
    </nav>
  );
}