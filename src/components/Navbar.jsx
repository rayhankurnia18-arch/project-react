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
          to="/nama1"
          className={`transition duration-300 ${
            location.pathname === "/nama1"
              ? "text-purple-400 scale-110"
              : "hover:text-purple-400"
          }`}
        >
          Profil 1
        </Link>

        <Link
          to="/nama2"
          className={`transition duration-300 ${
            location.pathname === "/nama2"
              ? "text-purple-400 scale-110"
              : "hover:text-purple-400"
          }`}
        >
          Profil 2
        </Link>

        <Link
          to="/nama3"
          className={`transition duration-300 ${
            location.pathname === "/nama3"
              ? "text-pink-400 scale-110"
              : "hover:text-pink-400"
          }`}
        >
          Profil 3
        </Link>

      </div>
    </nav>
  );
}