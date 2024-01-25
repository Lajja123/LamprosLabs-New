import "./App.css";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DaoRoadmap from "./pages/dao-roadmap/DaoRoadmap";
import Hackathon from "./pages/programs/Hackathon";
import React, { useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <HelmetProvider>
      <div>
        {loading ? (
          <div class="center">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
          </div>
        ) : (
          <div className="App">
            <Router>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about-us" element={<AboutUs />}></Route>
                <Route
                  path="/programs/hackathon"
                  element={<Hackathon />}
                ></Route>
                <Route path="/dao-roadmap" element={<DaoRoadmap />}></Route>
              </Routes>
            </Router>
          </div>
        )}
      </div>
    </HelmetProvider>
  );
}

export default App;
