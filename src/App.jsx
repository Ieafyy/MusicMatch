import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import Header from "./header";
import Footer from "./footer";
import Login from "./login";
//npm install react-router-dom

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/MusicMatch" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
