import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import React from "react";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import Home from "./pages/home/Home";
import NotFound from "./pages/not found/NotFound";
import Plans from "./pages/plans/Plans";
import Trainings from "./pages/trainings/Trainings";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Plans />
      <Gallery />
      <Trainings />
      <NotFound />
    </BrowserRouter>
  );
}

export default App;
