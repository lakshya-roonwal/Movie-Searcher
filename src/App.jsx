import { useState } from "react";
import "./App.css";
import Nav from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SingleMovie from "./components/SingleMovie";

function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<SingleMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;