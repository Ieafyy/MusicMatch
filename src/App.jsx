import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import Header from "./header";
//npm install react-router-dom

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
