import "./App.css";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DaoRoadmap from "./pages/dao-roadmap/DaoRoadmap";
import Hackathon from "./pages/programs/Hackathon";
import React, { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate an asynchronous action, such as fetching data or other initialization
    const fetchData = async () => {
      // Your asynchronous code here
      // For example, you might fetch data using axios or the Fetch API

      // Simulating a delay
      await new Promise((resolve) => setTimeout(resolve, 4000));

      // Update the loading state to indicate that the content has loaded
      setIsLoading(false);
    };

    // Call the fetchData function
    fetchData();
  }, []);
  return (
    <div>
      {isLoading ? (
        // Loading animation
        <div class="wavy">
          <span style={{ "--i": 1 }}>L</span>
          <span style={{ "--i": 2 }}>o</span>
          <span style={{ "--i": 3 }}>a</span>
          <span style={{ "--i": 4 }}>d</span>
          <span style={{ "--i": 5 }}>i</span>
          <span style={{ "--i": 6 }}>n</span>
          <span style={{ "--i": 7 }}>g</span>
          <span style={{ "--i": 8 }}>.</span>
          <span style={{ "--i": 9 }}>.</span>
          <span style={{ "--i": 10 }}>.</span>
        </div>
      ) : (
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about-us" element={<AboutUs />}></Route>
              <Route path="/programs/hackathon" element={<Hackathon />}></Route>
              <Route path="/dao-roadmap" element={<DaoRoadmap />}></Route>
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
