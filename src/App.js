import "./App.css";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DaoRoadmap from "./pages/dao-roadmap/DaoRoadmap";
import Hackathon from "./pages/programs/Hackathon";
import Navbar from "./pages/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/programs/hackathon" element={<Hackathon />}></Route>
          <Route path="/dao-roadmap" element={<DaoRoadmap />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
