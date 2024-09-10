import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div>
        <Navigation /> {/* Navigation bar displayed on all pages */}
        <Routes> {/* Replace 'Switch' with 'Routes' */}
          <Route path="/" element={<Home />} /> {/* Update to use 'element' prop */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;