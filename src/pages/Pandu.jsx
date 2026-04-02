import React from "react";
import { Link } from "react-router-dom";
import pandu from "../assets/pandu.jpeg"; // 🔥 ini doang tambahan

export default function Pandu() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 rounded-full blur-[150px] opacity-30 top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-500 rounded-full blur-[120px] opacity-30 bottom-[-100px] right-[-100px]"></div>

      {/* CARD */}
      <div className="z-10 text-center backdrop-blur-2xl bg-white/10 border border-white/20 p-10 rounded-3xl shadow-[0_0_50px_rgba(0,0,255,0.3)] max-w-md w-full hover:scale-105 transition duration-300">

        {/* FOTO */}
        <div className="relative w-36 h-36 mx-auto mb-4">
          <img
            src={pandu} // 🔥 FIX DISINI
            alt="pandu"
            className="w-full h-full rounded-full object-cover border-4 border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.8)]"
          />
          <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-pulse"></div>
        </div>

        {/* NAMA */}
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Pandu Aji Setiawan
        </h1>

        {/* INFO */}
        <div className="mt-4 text-gray-300 text-sm space-y-1">
          <p><span className="text-white font-semibold">Kelas:</span> T2F</p>
          <p><span className="text-white font-semibold">Prodi:</span> Teknologi Informasi</p>
          <p><span className="text-white font-semibold">Domisili:</span> Blitar</p>
        </div>

        {/* DESKRIPSI */}
        <p className="mt-4 text-gray-400 text-sm leading-relaxed">
          Saya adalah mahasiswa yang memiliki minat dalam bidang teknologi,
          meskipun masih memiliki keterbatasan dalam ide dan kemampuan. Oleh
          karena itu, saya terus belajar dan beradaptasi agar dapat berkembang.
          Saya ingin mengimplementasikan ilmu yang saya dapat dengan membuat
          website sederhana yang dapat membantu banyak orang.
        </p>

        {/* NAVIGATION */}
        <div className="flex justify-between mt-6">

          <Link
            to="/Rayhan"
            className="px-5 py-2 bg-gray-700 rounded-lg hover:scale-105 transition"
          >
            ← Kembali
          </Link>

          <Link
            to="/Jordan"
            className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:scale-105 transition"
          >
            Next →
          </Link>

        </div>

      </div>
    </div>
  );
}