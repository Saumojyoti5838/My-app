import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Navbar from './components/navbar/Nanvar';
import Home from './pages/navbar/Home';
import About from './pages/navbar/About';
import Projects from './pages/navbar/Projects';
import Educations from './pages/navbar/Education';
import Certificate from './pages/navbar/Certificate';
import Footer from './pages/navbar/Footer';
import './Appa.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes> {/* Wrap Routes around your Route components */}
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/educations" element={<Educations />} />
          <Route path="/certificate" element={<Certificate />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;