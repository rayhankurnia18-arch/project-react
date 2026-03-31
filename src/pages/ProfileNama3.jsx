import React from "react";
import { Link } from "react-router-dom";
import jordan from "../assets/jordi.jpeg"; // 🔥 ini doang tambahan

export default function ProfileNama3() {
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
            src={jordan} // 🔥 FIX DI SINI
            alt="Jordan"
            className="w-full h-full rounded-full object-cover border-4 border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.8)]"
          />
          <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-pulse"></div>
        </div>

        {/* NAMA */}
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Ilham Jordan Oktaviar
        </h1>

        {/* INFO */}
        <div className="mt-4 text-gray-300 text-sm space-y-1">
          <p><span className="text-white font-semibold">Kelas:</span> T2F</p>
          <p><span className="text-white font-semibold">Prodi:</span> Teknologi Informasi</p>
          <p><span className="text-white font-semibold">Domisili:</span> Tuban</p>
        </div>

        {/* DESKRIPSI */}
        <p className="mt-4 text-gray-400 text-sm leading-relaxed">
          Saya adalah seorang mahasiswa yang sedang menempuh pendidikan di jurusan Teknologi Informasi.
          Saya memiliki minat besar terhadap dunia teknologi, khususnya dalam bidang pemrograman dan
          pengembangan aplikasi. Selama kuliah, saya aktif mempelajari berbagai materi seperti coding,
          jaringan, dan basis data, serta sering mengikuti kegiatan seperti workshop dan komunitas IT
          untuk menambah pengalaman. Dengan semangat belajar yang tinggi, saya bercita-cita menjadi
          seorang developer yang mampu menciptakan teknologi yang bermanfaat bagi banyak orang.
        </p>

        {/* BUTTON */}
        <div className="mt-6">
          <Link
            to="/"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-110 hover:shadow-[0_0_25px_rgba(168,85,247,0.9)] transition duration-300 font-semibold"
          >
            ← Kembali ke Home
          </Link>
        </div>

      </div>
    </div>
  );
}