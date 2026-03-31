import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProfileNama1 from "./pages/ProfileNama1";
import ProfileNama2 from "./pages/ProfileNama2";
import ProfileNama3 from "./pages/ProfileNama3";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nama1" element={<ProfileNama1 />} />
        <Route path="/nama2" element={<ProfileNama2 />} />
        <Route path="/nama3" element={<ProfileNama3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;