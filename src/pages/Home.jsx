import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 rounded-full blur-[150px] opacity-30 top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-500 rounded-full blur-[120px] opacity-30 bottom-[-100px] right-[-100px]"></div>

      {/* CARD */}
      <div className="z-10 text-center backdrop-blur-2xl bg-white/10 border border-white/20 p-12 rounded-3xl shadow-[0_0_50px_rgba(0,0,255,0.3)] max-w-xl w-full">

        {/* TITLE */}
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          PROFIL TIM
        </h1>

        {/* SUBTITLE */}
        <p className="mt-4 text-gray-300">
          Website profil anggota kelompok.
        </p>

        {/* BUTTON TENGAH */}
        <div className="mt-8 flex justify-center">
          <a
            href="/nama1"
            className="px-10 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
            hover:scale-110 hover:shadow-[0_0_25px_rgba(168,85,247,0.9)] 
            transition duration-300 font-semibold text-lg"
          >
            Masuk
          </a>
        </div>

      </div>
    </div>
  );
}