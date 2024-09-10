import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navigation'; 

function App() {
  return (
    <Router basename="/my-portfolio">  {/* Set the basename */}
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />  {/* Home Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;