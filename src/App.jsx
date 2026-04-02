import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rayhan from "./pages/Rayhan";
import Pandu from "./pages/Pandu";
import Jordan from "./pages/Jordan";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rayhan" element={<Rayhan />} />
        <Route path="/pandu" element={<Pandu />} />
        <Route path="/jordan" element={<Jordan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;