import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import Header from "./header";
import Footer from "./footer";
import Login from "./components/login";
//npm install react-router-dom

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/MusicMatch" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <div className="mt-10">
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
